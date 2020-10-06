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


export const AddRobotPost = (type,SerialNumber) => {
    const sendData={
        type,
        SerialNumber
        
    }
    return new Promise((resolve, reject) => {
        fetch('/addrobotpost',{
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