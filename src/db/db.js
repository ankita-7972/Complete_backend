const mongoose = require("mongoose");



async function connectDB() {

    await mongoose.connect("mongodb+srv://Ak:Ankita%402002@backendseries.fsa1rtn.mongodb.net/backenddb")

    console.log("Conneted to database");
    
}

module.exports = connectDB;