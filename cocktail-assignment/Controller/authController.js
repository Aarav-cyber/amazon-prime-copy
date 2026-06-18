const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcryptjs");
const User = require("../model/authdb");

exports.register = async(req,res)=>{
try{

    const extistinguser = await User.findOne({
        email:req.body.email
    })
    if(extistinguser){
       return res.status(400).json({
        message:"user already registered"
       })
    }
const hashpswrd = await  bcrypt.hash(req.body.password,10)

    const user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password:hashpswrd
    })

    res.status(201).json({
    message: "Done with the registration....",
    user
 })

}catch(err){

}
}

exports.login = async (req,res)=>{
try{

    const user = await User.findOne({
        email:req.body.email
    })

    if(!user){
return res.status(400).json({
        message:"user not found "
       })
    }

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if(!isMatch){
  return res.status(400).json({
    message:"invalid pswrd"
  })
    }

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.jwt_secret,
        {
            expiresIn: "5d"
        }
    )

    res.json({
         message: "done with the logging....",
        token
    })




}catch(err){

}
}