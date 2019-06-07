const nodemailer = require('nodemailer')
const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
const mailer = (report, callback) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'newsmailer21@gmail.com',
            pass: process.argv[2]
        }
    })

    const mailOptions = {
        from: process.argv[3],
        to: process.argv[4],
        subject: `Weather ${date}`,
        text: `${report}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(console.log(error))
        }
        else {
            callback(undefined, console.log('Email sent ' + info.response))
        }
    })
}

module.exports = mailer