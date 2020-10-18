const express = require('express')
const fs = require('fs')
const session = require('express-session')
const cookie = require('cookie-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
const dataModule = require('./modules/mysqlDataModule')
const adminRoutes = require('./routes/adminRoutes')
const emailSender = require('./modules/emailSender')
const app = express()

app.use(express.static(__dirname + '/public/build'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const sessionOptions = {
    secret: 'bookStore',
    cookie: {},
    resave:true,
    saveUninitialized: true
}
app.use(session(sessionOptions))
app.use(cookie())
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))

const port = process.env.PORT || 5000

app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });

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
    if (fname && lname && email && password && password == repassword) {
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
    } else {
        res.json(2)
    }

});

app.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        //  console.log(req.body);

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

app.post('/forgetpassword', (req, res) => {
    const emailuser = req.body.email
    console.log( req.body.email);
    if (emailuser) {
         console.log(req.body);
        dataModule.checkEmail(emailuser).then(user => {
            //console.log(user)
            // set reset password
            if (user) {
                let uid = (parseInt(user.id) * 13) + (parseInt(user.id) * 71) + 91;
                dataModule.runQuery(`UPDATE users SET reset = '${uid}' WHERE id = ${user.id} ;`).then(result => {
                    if (result.affectedRows) {
                        const message = `to reset your password please click the following link\n 
                            <a href='http://localhost:3000/Changepassword/${uid}'>reset password</a>`
                        emailSender.getEmail(emailuser, message, 'change password', (ok) => {
                            if (ok) {
                                res.json(1)

                            } else {
                                res.json(3)
                            }
                        })
                    } else {

                    }
                })
            }


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

app.post('/changepassword', (req, res) => {
    const newpassword = req.body.password
    const userId = req.body.usrid
    //let uid = 91 - ((parseInt(userId) / 13) - (parseInt(userId) / 71)) ;
    //      679 =  91- (52 - 9)
    // 679 = 13x + 71x + 91 = 84x +91 =>679 => x= (679-91)/84
    let decodedId = (parseInt(userId) - 91) / 84
    console.log(newpassword, decodedId);
    if (newpassword) {
        dataModule.runQuery(`SELECT * FROM users WHERE reset = '${userId}' ;`).then(result=>{
            if(result.length >0){
                dataModule.ubdatePassword(newpassword, decodedId, userId).then(result1=>{

                    if(result1.affectedRows){
                        // update done
                        res.json(1)
                    }else{
                        // update failed
                        res.json(3)
                    }
                }).catch(error=>{
                    console.log(error);
                    res.json(4)
                })
            }else{
                // send invalid url
                res.json(2)
            }
        })
        // dataModule.ubdatePassword(newpassword, uid).then(() => {

        //     res.json(1)

        // }).catch(error => {
        //     if (error == 3) {
        //         res.json(3)
        //     } else {
        //         res.json(4)
        //     }
        // })
    } else {
        res.json(2)
    }
})


app.post('/checklogin',(req,res)=>{
    if (req.session.user) {
        res.json(req.session.user.email)
    }else{
        res.json(10)
    }
})

app.use('/admin', adminRoutes);
app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/public/build/index.html', 'utf-8')
    res.send(html);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});