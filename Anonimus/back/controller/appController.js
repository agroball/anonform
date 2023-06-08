const nodemailer = require('nodemailer');

/** send mail from testing account */
const signup = (req, res) => {

    console.log(req.body.text);
    /** testing account */
    let testAccount = nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    let message = {
        from: '', // sender address
        to: "", // list of receivers
        subject: "Hello", // Subject line
        text: "req.body.text", // plain text body
        html: req.body.text, // html body
      }


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Successfully...!");
}

module.exports = {
    signup
}
