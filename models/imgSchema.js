const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');

const AVATAR_PATH = path.join('/uploads')

const imgSchema = mongoose.Schema({ 
    avatar: {
        type: String,
    }
})


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname, '..' , AVATAR_PATH));
        // console.log(file);
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        // cb(null,file.originalname)
        // console.log(file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
});

imgSchema.statics.uploadedAvatar = multer({storage:storage}).single('avatar');
imgSchema.statics.avatarPath = AVATAR_PATH;
const avatarUpload = mongoose.model('avatarUploads', imgSchema);
module.exports = avatarUpload