const Cocktail = require("../model/CocktailProduts")
const dotenv = require("dotenv").config()
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secrect
})



exports.addproduct = async (req,res)=>{
try{

  const result = await cloudinary.uploader.upload(
    req.file.path,
    {
        folder: "store"
    }
  )

 const product = await Cocktail.create({
    name:req.body.name,
    ingredients:req.body.ingredients,
    instructions:req.body.instructions,
    image:result.secure_url
 });

 res.status(201).json({
    message: "products added",
    product
 })

}catch(err){
res.status(500).json({
    message: err,
    
 })
}
}

exports.getall = async (req,res)=>{
    
    try{

        const product = await Cocktail.find()
        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}

exports.getbyid = async (req,res)=>{
    
    try{

        const product = await Cocktail.findById(req.params.id)

        res.status(201).json({
    message: "details of products ",
    product
 })

    }catch(err){
res.status(500).json({
    message: err,
    
 })
}
}