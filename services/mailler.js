var nodemailer = require('nodemailer');
const resetPassword = require("../Templates/Mail/resetPassword");
const resetOTP = require("../Templates/Mail/otp");

//send link for reseting password
exports.sendGmail = (name, emailCrypted, email) => {
  var link = process.env.CLIENT_URL + "/settings/reset/" + emailCrypted
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'janeirohurleydev@gmail.com',
      pass: 'eumomtxmwjqhwdgp'
    }
  });

  var mailOptions = {
    from: 'janeirohurleydev@gmail.com',
    to: `${email}`,
    subject: 'Resetting password',
    html: resetPassword(name, link)
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

//send otp methods


exports.sendOtp = (name, otp, email,res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'janeirohurleydev@gmail.com',
      pass: 'eumomtxmwjqhwdgp'
    }
  });

  var mailOptions = {
    from: 'janeirohurleydev@gmail.com',
    to: `${email}`,
    subject: 'OTP VERIFICATION',
    html: resetOTP(name, otp) 
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error: "+ res);
      res.status(200).send({error:"something went wrong please try again "})
    } else {
      console.log('Email sent: ' + res);
      res.status(200).send({message:"your OTP varification was sent to ur email "})
    }
  });
};
