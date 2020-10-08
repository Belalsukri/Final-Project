const express = require('express')
const dataModule = require('../modules/mysqlDataModule')

const adminRouter = express.Router()
adminRouter.use((req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        //next()
        // if (req.method.toUpperCase()==='GET') {
        //     res.redirect('/login')
        // }
       switch (req.method.toUpperCase()) {
           case 'GET':
            res.redirect('/login')
               break;
               case 'POST':
                res.json(10)
                   break;
           default:
               res.json('nothing to be chown')
               break;
       }
    }
})
adminRouter.post('/', (req, res) => {
    if (req.body.email && req.body.password) {
      //  console.log(req.body);

        dataModule.checkAdmin(req.body.email.trim(), req.body.password).then(user => {
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
adminRouter.post('/AddRobot', (req, res) => {
    if (req.body.type && req.body.SerialNumber) {
       // console.log(req.body);
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
adminRouter.post('/robots', (req, res) => {
  //  console.log(req.session.user.id);
    dataModule.userRobots(req.session.user.id).then(robot => {
        res.json(robot)
    }).catch(error => {
        res.json(2);
    })
})
adminRouter.post('/deletrobot', (req, res) => {
    const robotid = req.body.robotId
   
    console.log(robotid);
    dataModule.deleteRobot(robotid, req.session.user.id).then(() => {
        res.json(1)
    }).catch(error => {
        res.json(2)
    })
})

adminRouter.post('/editrobot', (req, res) => {
 const newName = req.body.name
    console.log(newName);
    dataModule.updateRobot(newName).then(() => {
res.json(1)
    }).catch(error => {
res.json(2)
    })
    

})
module.exports = adminRouter