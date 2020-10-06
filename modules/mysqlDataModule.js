const passwordHash = require('password-hash')

const mySql = require('mysql')
const fs = require('fs')
let con
function connect() {
    return new Promise((resolve, reject) => {
        if (con) {
            if (con.state === 'disconnected') {
                con.connect(error => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve()
                    }
                })
            } else {
                resolve()
            }
        } else {
            con = mySql.createConnection({
                multipleStatements: true,
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '12345678',
                database: 'robot_db'
            })
            con.connect(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        }
    })
}

function runQuery(queryString) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            con.query(queryString, (error, result, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function registerUser(fname, lname, email, password) {
    return new Promise((resolve, reject) => {
        // "INSERT INTO users (email, password) VALUES ('" + email + "', '" + passwordHash.generate(password) + "')"
        runQuery(`INSERT INTO users (fname, lname, email, password) VALUES ('${fname}', '${lname}', '${email}', '${passwordHash.generate(password)}')`).then(() => {
            resolve()
        }).catch(error => {
            if (error.errno === 1062) {
                reject('exist')
            } else {
                reject(error)
            }
        })
    })
}

function checkUser(email, password) {
    return new Promise((resolve, reject) => {
        // any result from SELECT query will be return as an array (empty array or array with one element or array with many elements)
        runQuery(`SELECT * FROM users where email like '${email}'`).then(result => {
           // console.log(result)
            if (result.length === 0) {
                reject(4)
            } else {
                if (passwordHash.verify(password, result[0].password)) {
                    
                    resolve(result[0])
                    console.log(result[0]);
                } else {
                    reject(3)
                }
            }
        }).catch(error => {
            reject(error)
        })
    })
}

function checkAdmin(email, password) {
    return new Promise((resolve, reject) => {
        // any result from SELECT query will be return as an array (empty array or array with one element or array with many elements)
        runQuery(`SELECT * FROM admin where email like '${email}'`).then(result => {
           // console.log(result)
            if (result.length === 0) {
                reject(4)
            } else {
                if (passwordHash.verify(password, result[0].password)) {
                    
                    resolve(result[0])
                    console.log(result[0]);
                } else {
                    reject(3)
                }
            }
        }).catch(error => {
            reject(error)
        })
    })
}

function AddRobot(name, SerialNumber ,userId) {
    return new Promise((resolve, reject) => {
        // "INSERT INTO users (email, password) VALUES ('" + email + "', '" + passwordHash.generate(password) + "')"
        runQuery(`SELECT * FROM robot where serial_number like '${SerialNumber}'`).then(result => {
             console.log(result)
             
             
                    if (result.length ) {

                      if(result[0].user_id){
                        reject(5) // 5 robot is used
                      } else {
                          // add robot to user
                          runQuery(`UPDATE robot set user_id =${userId} , name='${name}' where serial_number like '${SerialNumber}'`).then(()=>{
                              resolve()
                          }).catch(error=>{
                            reject(error)
                          })
                      }
                       
                    } else {
                        reject(4) // 4 serial number is not exist
                        
                    } 
             
         }).catch(error => {
             reject(error)
         })
    })
}

module.exports = {
    registerUser,
    checkUser,
    AddRobot,
    checkAdmin
}