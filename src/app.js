const express = require('express');
const notemodel = require("./models/note.model")


const app = express();

// req.body mai data aane ke liye middleware(express) use krna pdta hai
app.use(express.json())

/*
POST/notes- create note
GET/notes--- get all notes
DELETE/notes/:id ----- Delete notes
PATCH/notes/:id-------update notes

*/

app.post("/notes",async(req,res)=>{
    const data = req.body

    await notemodel.create({
        title :data.title,
        description :data.description
    })

    res.status(201).json({
        message : "note created"
    })

})

app.get("/notes",async(req,res)=>{
    const notes = await notemodel.find() // find method hamesha array[] return krega

    
    // find - array of object deti hai[{},{}]  or empty array deti hai []
    // findOne- ye hame hamesha object deti hai{} or null deti hai
    

    res.status(200).json({
        message : "Notes featched Sucessfully",
        notes : notes
    })

})

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id
    await notemodel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "note deleted sucessfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
    


    await notemodel.findByIdAndUpdate({_id:id},{description:description})


    res.status(200).json({
        message : "Note updated sucessfully"
    })
})


// app.patch("/notes/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description } = req.body;

//     // validation
//     if (!title && !description) {
//       return res.status(400).json({
//         message: "At least one field (title or description) is required"
//       });
//     }

//     const updatedNote = await notemodel.findByIdAndUpdate(
//       id,
//       {
//         ...(title && { title }),
//         ...(description && { description })
//       },
//       { new: true } // returns updated note
//     );

//     if (!updatedNote) {
//       return res.status(404).json({
//         message: "Note not found"
//       });
//     }

//     res.status(200).json({
//       message: "Note updated successfully",
//       note: updatedNote
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: "Server error",
//       error: error.message
//     });
//   }
// });



module.exports = app;