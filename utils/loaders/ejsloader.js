const ejs = require('ejs')
function writedata(path, ejsfiledata) {
    return new Promise((resolve, reject) => {
        ejs.renderFile(path, ejsfiledata, (err, data) => {
            if (err)
                reject(err)
            resolve(data)
        })
    })
}
module.exports=writedata