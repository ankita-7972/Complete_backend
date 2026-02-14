// server ko create krta hai app.js file mai

const express = require("express");


const app = express()

//express ke body ke andar jo req aata hai use express red nhi kr skta Ooo utna capable nhi hota 
//to uske liye use middleware use krna pdta hai usase Ooo data ko red kr sake 
app.use(express.json())

const notes =[]

// array ke andar kuch data hoga notes ka "title", description
// POST method use krke api create ki hai 
// /notes api name hai
app.post('/notes',(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
    
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"note featch successfully",
        notes:notes
    })

})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    delete notes [ index ]

    res.status(200).json({
        message:"note delete sucessfully"
    })

})


module.exports=app;