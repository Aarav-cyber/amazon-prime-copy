const mongoose = require("mongoose")

const connectDb = async()=>{
    try{
       await mongoose.connect("mongodb+srv://aravraj331_db_user:6dONSjvMlB5rczDk@cluster0.xtxlqib.mongodb.net/?appName=Cluster0")
         console.log("db connected")

    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb;
