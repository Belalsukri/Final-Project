const express = require('express')
const fs = require('fs')
const session = require('express-session')
const cookie = require('cookie-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
const dataModule = require('./modules/mysqlDataModule')
const adminRoutes = require('./routes/adminRoutes')
const emailSender = require('./modules/emailSender')
const helmet = require('helmet') 
const app = express()

app.use(helmet.frameguard({ action: 'sameorigin' }));

const accountSid = 'AC142a85c283c630555a25344f709519f9';
const authToken = '586c127e542dc30b52477c9310cc2eb1';
const client = require('twilio')(accountSid, authToken);

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
const io = require('socket.io')(server);

io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {
    socket.on("broadcaster", (userid) => {
        socket.join(userid)
        socket.broadcast.emit("broadcaster");
    });
    socket.on("watcher", (userid) => {
        socket.join(userid)
        socket.broadcast.to(userid).emit("watcher", socket.id);
        socket.on("command", (command) => {
            socket.broadcast.to(userid).emit("command", command);
        });
    });
    socket.on("robot", (robotid) => {
        dataModule.getRobotById(robotid).then(robot => {
            if(robot && robot.user_id){
                socket.join(robot.user_id)
                socket.broadcast.to(robot.user_id).emit("robot", socket.id);
            } else {
                socket.disconnect()
            }
        })
    });
    

    socket.on("offer", (id, message) => {
        socket.broadcast.to(id).emit("offer", socket.id, message);
    });
    socket.on("answer", (id, message) => {
        socket.broadcast.to(id).emit("answer", socket.id, message);
    });
    socket.on("candidate", (id, message) => {
        socket.broadcast.to(id).emit("candidate", socket.id, message);
    });
    socket.on("disconnect", (userid) => {
        socket.broadcast.to(userid).emit("disconnectPeer", socket.id);
    });
});

app.use(express.static(__dirname + '/public/build'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
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



// app.use(function(req, res, next) {
//     res.locals.user = req.session.user;
//     next();
//   });

  let iceToken;
  client.tokens.create().then(data => {
    iceToken = data
  });

app.get('/watcher', (req, res) => {
    if(req.session.user){
        // Content-Security-Policy: frame-ancestors 'self' https://cw.na1.hgncloud.com
        // X-Frame-Options: ALLOW-FROM https://cw.na1.hgncloud.com
        res.setHeader("Content-Security-Policy", "frame-ancestors 'self' https://bogyrobot.coding-school.org");
        res.setHeader("X-Frame-Options", "ALLOW-FROM https://bogyrobot.coding-school.org");
        res.render('watcher', { iceservers: JSON.stringify(iceToken.iceServers), userid: req.session.user.id})
    } else {
        //res.send('error')
        res.redirect('/login')
    }
})
  app.get('/broadcaster/:sn', (req, res) => {
      const SerialNumber = req.params.sn
      //console.log(token)
    //const robot = robots.find(robot => robot.sn === req.params.sn)
    dataModule.getRobotBySerialNumber(SerialNumber).then(robot => {
        if(robot && robot.user_id){
            res.render('broadcaster', { iceservers: JSON.stringify(iceToken.iceServers), userid: robot.user_id })
        }
        else {
            res.send('error')
        }
    }).catch(error => {
        res.send(error.message)
    })
    
  })

  app.post('/geticeservers', (req, res) => {
    res.json(iceToken.iceServers)
  })


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
            res.json({id: req.session.user.id, email: req.session.user.email})
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
                            <a href='https://bogyrobot.coding-school.org/Changepassword/${uid}'>reset password</a>`
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
        res.json({id: req.session.user.id, email: req.session.user.email})
    }else{
        res.json(10)
    }
})

app.post('/sender', (req, res) => {   
    const name = req.body.name
    const email = req.body.email.trim()
    const subject = req.body.subject
    const message = req.body.message
    //console.log(req.body);
    if (name && email && subject && message){
        //dataModule.senderContact(name, email, subject, message).then(() => {
            emailSender.getMessageContact(name, email, subject, message, 'Feed Back', (ok) => {
                if (ok) {
                    res.json(1)
                } else {
                    res.json(3)
                }
            })
    } else {
            res.json(2)
        }  
});

app.use('/admin', adminRoutes);
app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/public/build/index.html', 'utf-8')
    res.send(html);
})


