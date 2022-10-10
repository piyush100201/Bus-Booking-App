const UserModel = require('../models/user')
const mongoose = require('mongoose');
const User = mongoose.model("user");
const bcrypt = require('bcrypt')





exports.create = async (req, res) => {
   const {firstName,lastName,email,password,mobile,gender,dob} = req.body;
   if(!email || !password || !firstName || !lastName || !mobile || !gender || !dob){
        return res.status(422).json({error:"please add all the fields"})
     }
     await User.findOne({email:email})
     .then((savedUser)=>{
         if(savedUser){
           return res.status(422).json({error:"user already exists with that email"})
         }
         bcrypt.hash(password,12)
         .then(hashedpassword=>{
               const user = new User({
                   email,
                   password:hashedpassword,
                   firstName,
                   lastName,
                   mobile,
                   gender,
                   dob
                  })
       
               user.save()
               .then(user=>{
                  res.json(user)
               })
               .catch(err=>{
                   console.log(err)
               })
         })
        
     })
     .catch(err=>{
       console.log(err)
     })
    

};
