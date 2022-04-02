const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music',
      to: targetEmail,
      subject: 'Playlist songs export',
      text: 'Hello, here is your exported playlist songs!',
      attachments: [
        {
          filename: 'playlist-songs.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
