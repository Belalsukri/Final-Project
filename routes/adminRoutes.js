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