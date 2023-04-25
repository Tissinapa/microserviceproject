const express = require("express")
const app = express()
const port = 5000
let mongoose = require("mongoose")
const bodyParser = require("body-parser")

const Hardware = require("../hardwares/models/Hardware")

mongoose.set('strictQuery', true)

const mongoDB = "mongodb://localhost:27017/hardwareservice"
mongoose.connect(mongoDB)
mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/Hardware", (req, res)=>{
    res.send("Hardware")
}) 
app.post("/Hardware/add", (req,res)=>{
    
    Hardware.create({
        device: req.body.device
    
    },
    (err, ok)=>{
        if(err)throw err;
        return res.send("Hardware added")
    })
    
})

app.listen(port, ()=>{
    console.log("listening port: "+port)
})