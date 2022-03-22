export default function (req, res) {


    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'yw2sxcdovvususth@ethereal.email',
            pass: 'm1TfXYVFpJ5cGtTuHV'
        }
    });
    
    const mailData = {
        from: 'bill@christianwebdeveloper.com',
        to: 'billhall168@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }