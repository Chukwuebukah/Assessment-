const nodemailer = require('nodemailer');

// Email service credentials
const emailService = 'gmail';
const emailUser = 'ebukahwilson120@gmail.com';
const emailPassword = 'your-email-password';

// Create a transporter object using your email service credentials
const transporter = nodemailer.createTransport({
  service: emailService,
  auth: {
    user: emailUser,
    pass: emailPassword
  }
});

// Function to send email
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: emailUser,
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error: ', error);
    }
    console.log('Email sent: ' + info.response);
  });
}

// Example usage
sendEmail('ogbitiemmanuella22@gmail.com', 'Test Email from Node.js', 'Hello! This is a test email sent from a Node.js script using nodemailer.');