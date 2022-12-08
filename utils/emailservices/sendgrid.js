const sgmail = require('@sendgrid/mail')
class SendGrid {
    constructor(key) {
        sgmail.setApiKey(key)
    }
    set data(data) {
        if (data.to && data.from && data.subject && data.text)
            this.msg = {
                to: data.to,
                from: data.from,
                subject: data.subject,
                text: data.text,
                html: data.html
            }
        else
            throw Error('msg must meet all parameter')
    }
    sendmessage() {
        if (!this.msg) {
            throw Error('message is not set')
        }
        return new Promise((resolve, reject) => {
            sgmail
                .send(this.msg)
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}
module.exports = SendGrid