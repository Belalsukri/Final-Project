export const registerPost = (fname, lname, email, password, repassword) => {
    const sendData={
        fname,
        lname,
        email,
        password,
        repassword
    }
    return new Promise((resolve, reject) => {
        fetch('/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })

    })
    
}
////// login

export const loginPost = (email,password) => {
    const sendData={
      email,
      password
        
    }
    return new Promise((resolve, reject) => {
        fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    //console.log(data);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })

    })
    
}


export const loginAdminPost = (email,password) => {
    const sendData={
      email,
      password
        
    }
    return new Promise((resolve, reject) => {
        fetch('/Admin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    //console.log(data);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })

    })
    
}

export const getMyRobotPost=() => {
    return new Promise((resolve, reject) => {
       
        fetch('/admin/robots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
           
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                   // console.log(data);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('can not get the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export const AddRobotPost = (type,SerialNumber) => {
    const sendData={
        type,
        SerialNumber
        
    }
    return new Promise((resolve, reject) => {
        fetch('/admin/AddRobot',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    //console.log(data);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })

    })
    
}


export const deletePost=(robotId , serial_number)=>{
    const sendData={
        robotId,
        serial_number
    }
    return new Promise((resolve, reject)=>{
        fetch('/admin/deletrobot',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(recivedData => {
                    console.log(recivedData);
                    resolve(recivedData)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })

    })
    
}

export const updateRobotPost=(name)=>{
    const obj={
        name
    } 
    return new Promise((resolve, reject) => {
     
        fetch('/admin/editrobot', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        }).then(response => {
            if(response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('can not get the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
    }

    export const ForgetPasswordPost = (email) => {
        const sendData={
          email,     
        }
        return new Promise((resolve, reject) => {
            fetch('/forgetpassword',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        //console.log(data);
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                }else{
                    reject(new Error('can not send data to server. response number is :'+response.status))
                }
            }).catch(error => {
                reject(error)
            })
    
        })
        
    }

    export const ubdatePasswordPost = (password , usrid) => {
        const sendData={
            password,  
            usrid
        }
        return new Promise((resolve, reject) => {
            fetch('/changepassword',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        //console.log(data);
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                }else{
                    reject(new Error('can not send data to server. response number is :'+response.status))
                }
            }).catch(error => {
                reject(error)
            })
    
        })
        
    }

    export const logoutPost=() => {
        return new Promise((resolve, reject) => {
           
            fetch('/admin/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject(new Error('can not get the data, response number is: ' + response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })
    }

    export const checkLogintPost=() => {
        return new Promise((resolve, reject) => {
           
            fetch('/checklogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject(new Error('can not get the data, response number is: ' + response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })
    }
    export const senderPost = (name, email, subject, message) => {
        const sendData={
            name,
            email,
            subject,
            message
        }
        return new Promise((resolve, reject) => {
            fetch('/sender',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(sendData)
            }).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data)
                    }).catch(error => {
                        reject(error)
                    })
                }else{
                    reject(new Error('can not send data to server. Response number is :'+response.status))
                }
            }).catch(error => {
                reject(error)
            })
        })   
    }