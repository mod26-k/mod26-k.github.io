// const express = require('express');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a transporter for sending emails
//   const transporter = nodemailer.createTransport({
//     // Configure the email provider settings
//     service: 'Gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   });

//   // Create the email message
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     subject: 'New Email from Portfolio Contact Form',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('An error occurred while sending the email.');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully!');
//     }
//   });
// });
