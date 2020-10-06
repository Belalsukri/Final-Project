const express = require ('express')
const fs = require('fs')
const session = require('express-session')
const cookie = require('cookie-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
const dataModule = require('./modules/mysqlDataModule')

const app = express()

app.use(express.static(__dirname + '/public/build'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
const sessionOptions = {
    secret: 'bookStore',
    cookie: {} 
}
app.use(session(sessionOptions))
app.use(cookie())
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))

const port = process.env.PORT || 5000

app.post('/register', (req, res) => {
    // your post register handler here
    // console.log(req.body)
    // 2 data error
    // 1 user registered successfuly
    // 3 user is exist
    // 4 server error
  //  console.log(req.body);
    const fname = req.body.fname.trim()
    const lname = req.body.lname.trim()
    const email = req.body.email.trim()
    const password = req.body.password
    const repassword = req.body.repassword
   // console.log(req.body);
    if (fname && lname && email && password && password == repassword){
        dataModule.registerUser(fname, lname, email, password).then(() => {
            res.json(1)
        }).catch(error => {
            console.log(error);
            if (error == "exist") {
                res.json(3)
            } else {
                res.json(4)
            }
        })
    } else{
            res.json(2)
        }
    
});

app.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        console.log(req.body);

        dataModule.checkUser(req.body.email.trim(), req.body.password).then(user => {
            req.session.user = user
            res.json(1)
        }).catch(error => {
            if (error == 3) {
                res.json(3)
            } else {
                res.json(4)
            }
        })
    } else {
        res.json(2)
    }
    
});


app.post('/addrobotpost', (req, res) => {
    if (req.body.type && req.body.SerialNumber) {
        
       // console.log(req.body);
       // 
        dataModule.AddRobot(req.body.type, req.body.SerialNumber, req.session.user.id).then(() => {
           
            res.json(1)
        }).catch(error => {
            if (error == 4) {
                res.json(4)
            } else {
                if(error == 5){
                    res.json(5)
                }else{
                    res.json(3)
                }
            }
        })
    } else {
        res.json(2)
    }
    
});

app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/public/build/index.html' , 'utf-8')
    res.send(html);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});