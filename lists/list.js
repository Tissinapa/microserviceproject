const express = require("express")
const app = express()
const port = process.env.PORT || 5001
let mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Movie = require("../movies/models/Movie")

const Game = require("../games/models/Game")

let MongoClient = require("mongodb").MongoClient
let url = "mongodb://localhost:27017/movieservice"
//const List = require("../movies/models/Movie")

 mongoose.set('strictQuery', true) 

const mongoDB = "mongodb://localhost:27017/movieservice"
mongoose.connect(mongoDB)
mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error")) 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/list", (req, res)=>{
    res.send("You have nice collection")
})
app.get("/list/all", (req,res)=>{
    console.log("list/all")

    Movie.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    }) 
    console.log("ei toimi")
/*     Game.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    }) */
}) 


app.listen(port, ()=>{
    console.log("listening port: "+port)
})