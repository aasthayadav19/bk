const express = require ("express")

const app = express() //server create

app.get('/',(req , res) =>{
    res.send ("hello")    //server program
})

app.listen (3000)