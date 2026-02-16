const mongoose = require("mongoose")

//creating a mongoose schema
const noteSchema = new mongoose.Schema({

    title : String,
    description : String
})


// notemodel create kyu krte hai  ki operation perform krne ke liye (create,update,delate,red)

const notemodel = mongoose.model('note',noteSchema)

module.exports = notemodel

