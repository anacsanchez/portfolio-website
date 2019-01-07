const router = require("express").Router();
const nodemailer = require("nodemailer");
const config = require("../config.js");

module.exports = router;

router.get('/', (req,res) => {
  res.send("You've reached the api!")
})

router.post('/email', (req,res) => {
  const {email, message} = req.body;
  let messageObj = {
    from: email,
    to: config.email,
    replyTo: email,
    subject: "Test",
    text: message,
  }
  let transporter = nodemailer.createTransport(config.smtp)
  transporter.sendMail(messageObj, (err, info) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(info)
    }
  })
  res.end();
})
