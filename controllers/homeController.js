const avatarUpload = require('../models/imgSchema')

module.exports.home = (req,res)=>{
    res.render('index')
}

module.exports.insertImg = (req,res)=>{
    // res.send('ha bhai work kare chhe') 

    avatarUpload.uploadedAvatar(req,res, (e)=>{ 
        if(e){
            console.log('File is missing');
            return false;
        }
        if(req.file){
            try{
                var avatarName = avatarUpload.avatarPath + '/' + req.file.filename;
                // console.log(avatarName);
                avatarUpload.create({ 
                    avatar: avatarName,
                })
                return res.redirect('back');
            }catch(e){
                console.log('something went wrong to upload image');
            }
        }
    })

}