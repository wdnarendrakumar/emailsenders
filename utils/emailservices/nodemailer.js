const nodemailer = require('nodemailer')
class NodeMailer {
    constructor(host, user, pass) {
        this.transporter = nodemailer.createTransport({
            host: host,
            port: 587,
            secure: false,
            auth: {
                user: user,
                pass: pass
            }
        })
    }
    set data(data) {
        if (data.to && data.from && data.subject && data.text)
            this.maildata = {
                from: data.from,
                to: data.to,
                subject: data.subject,
                text: data.text,
                html: data.html
            }
        else
            throw Error('msg must meet all parameter')
    }
    sendmessage() {
        if (!this.maildata)
            throw Error('maildata must set before proceding to next step')
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(
                this.maildata
            ).then(value => {
                resolve(value)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
module.exports = NodeMailer