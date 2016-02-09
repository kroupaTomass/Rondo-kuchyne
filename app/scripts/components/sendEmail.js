import React from 'react';
import { Link } from 'react-router';

import Mail from 'nodemailer';

class SendEmail extends React.Component{

  constructor(props, context) {
   super(props);
  }

  sendEmail() {
    // create reusable transporter object using the default SMTP transport
    var transporter = Mail.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Fred Foo 👥 <foo@blurdybloop.com>', // sender address
        to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world 🐴', // plaintext body
        html: '<b>Hello world 🐴</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
  }

  render() {
    return (
      <input className="sr-only" type="button" value="Odeslat e-mail" onClick={this.sendEmail} />
    );
  }
}

SendEmail.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default SendEmail;
