const express = require("express")
const app = express()
const port = 5000
let mongoose = require("mongoose")
const bodyParser = require("body-parser")

//const List = require("../movies/models/Movie")

mongoose.set('strictQuery', true)

const mongoDB = "mongodb://localhost:27017/listservice"
mongoose.connect(mongoDB)
mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/list", (req, res)=>{
    res.send("You have nice collection")
}) 


app.listen(port, ()=>{
    console.log("listening port: "+port)
})