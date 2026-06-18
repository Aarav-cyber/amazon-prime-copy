const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");




const auth = async(req,res,next)=>{

try{
    const token = req.header("Authorization")

if(!token){
return res.status(400).json({
    message:"BRO you need to login man"
})
}

const decode = jwt.verify(
    token,
    process.env.jwt_secret
);

req.user= decode;
next();

}catch(err){
    console.log(err)
}
}

module.exports  = auth