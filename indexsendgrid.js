let sendmailthroughsendgrid = require('./utils/emailservices/sendgrid')
const writedata = require('./utils/loaders/ejsloader')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()

let mail = new sendmailthroughsendgrid(process.env.SENDGRIDAPIKEY)
let id = uuidv4()
let name = "narendra"
let TestLocation = "Gurgaon"

writedata('./templates/checkedInTest.ejs', { id, name, TestLocation }).then(value => {
    mail.data = {
        to: 'Narendra.k@antino.io',
        from: 'wdnarendrakumar@gmail.com',
        subject: 'this is first automated email',
        text: 'testing first email',
        html: value
    }
    return mail.sendmessage()
}).then(value => {
        console.log(value)
    }).catch(error => {
        throw error
    })