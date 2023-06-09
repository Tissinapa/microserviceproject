const express = require("express")
const app = express()
const port = process.env.PORT || 5003
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

app.get("/hardware", (req, res)=>{
    res.send("Hardware")
}) 
//Adds new hardware to databse
app.post("/hardware/add", (req,res)=>{
    Hardware.create({
        device: req.body.device
    },
    (err, ok)=>{
        if(err){
            res.send("Error, input device name...")
        }else{
            return res.send("Hardware added")
        }
            
    })
    
})

app.listen(port, ()=>{
    console.log("listening port: "+port)
})