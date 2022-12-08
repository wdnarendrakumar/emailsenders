require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const writedata = require('./utils/loaders/ejsloader')
let sendmailthroughnodemailer = require('./utils/emailservices/nodemailer')
let mail = new sendmailthroughnodemailer('smtp.gmail.com', 'wdnarendrakumar@gmail.com', process.env.NODEMAILERPASS)
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