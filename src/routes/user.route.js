const express = require('express')
const User = require('../models/user.model')
const router = express.Router()


router.post('/signup', async (req,res)=>{
       const user = User({
            email:req.body.email,
            password:req.body.password
        })
        // user.save()
        await User.create(user);
            
        res.send("user added");
})



// router.post('/signin',(req,res)=>{
//     User.findOne({email:req.body.email,password:req.body.password},(err,user)=>{
//         if(err){
//             console.log(err)
//             res.json(err)
//         }else{
//             res.json(user)   
//         }
//     })
// })
module.exports = router