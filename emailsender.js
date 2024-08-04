var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stambouli.sahar@gmail.com',
    pass: '$$$$$$$'
  }
});

var mailOptions = {
  from: 'stambouli.sahar@gmail.com',
  to: 'stambouli.sahar@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});