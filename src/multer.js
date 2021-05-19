const multer = require("multer")
const path =require("path")

var storage = multer.diskStorage({
  destination: function (req, file, cb ) {
    console.log(file)
    cb(null, path.join(__dirname,'/public/img'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+"-"+Date.now()+"."+file.mimetype.split("/")[1])
  }
})
 
var upload = multer({ storage: storage })
module.exports = upload;