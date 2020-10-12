const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'robotcarnode@gmail.com',
        pass: 'robot123456789'
    }
})

function getEmail( emailUser,messageUsr, subject, callback) {
  
    const mailOption ={
        from: 'robotcarnode@gmail.com',
        to: emailUser,
        subject: subject,
        text:   messageUsr
    }
    transporter.sendMail(mailOption, function (error, info) {
        if(error){
            console.log(error);
            callback(false);
            
        } else {
            console.log(info.response);
            callback(true);
        }
      })

  }

  module.exports = { 
    getEmail,
}