const nodemailer = require("nodemailer");

module.exports = mail = ({ email, username, password }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: "no-reply@blockvote.in",
    to: email,
    subject: `Login Credential for Block Vote`,
    html: `<div>Username: ${username}</div><div>Password: ${password}</div>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) reject(err);
      resolve(info);
    });
  });
};
