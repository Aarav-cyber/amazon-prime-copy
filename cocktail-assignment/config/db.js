const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("DataBase Connected");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;