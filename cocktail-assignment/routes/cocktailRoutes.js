const {addproduct,getall,getbyid} = require("../controller/cocktailController")
const express = require("express")
const router = express.Router()
const multer = require("multer")
const auth = require('../middleware/authMiddleware')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-"+ file.originalname)
    }
})

const upload = multer({
    storage
})

router.post("/add/cocktail",upload.single("image"),addproduct)

router.get("/get/cocktails",auth,getall)

router.get("/get/cocktail/:id",auth,getbyid)

module.exports = router