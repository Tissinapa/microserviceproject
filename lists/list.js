const express = require("express")
const app = express()
const port = process.env.PORT || 5001
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Movie = require("../movies/models/Movie.js")

const Game = require("../games/models/Game")


mongoose.set('strictQuery', true) 

const movieDB = "mongodb://localhost:27017/movieservice"
//const gameDB = "mongodb://localhost:27017/gameservice"
mongoose.createConnection(movieDB)
//mongoose.createConnection(gameDB)

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