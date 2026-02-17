/* server create krna

server config krna

*/

const express = require("express")

const app = express()

app.use(express.json())

const notes=[
    // {
    //     title: "test title1",
    //     descrription: "test description1"
    // }
]




//api with method post with /notes   client notes create kr skta h is method se
app.post("/notes",(req,res) =>{
    console.log(req.body);

    notes.push(req.body)

    console.log(notes);
    
    
   res.send("notes created")
})


// isse client n jo notes create kiye h use dekh skta h
app.get("/notes",(req,res)=>{
    res.send(notes);
    
})

app.delete("/notes/:index", (req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully")

})


module.exports = app
