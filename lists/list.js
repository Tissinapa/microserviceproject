const express = require("express")
const app = express()
const port = process.env.PORT || 5002
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const axios = require("axios")
const Movie = require("../movies/models/Movie.js")

const Game = require("../games/models/Game")


mongoose.set('strictQuery', true) 

const movieDB = "mongodb://localhost:27017/movieservice"
//const gameDB = "mongodb://localhost:27017/gameservice"
mongoose.createConnection(movieDB)


mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error")) 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/list", (req, res)=>{
    res.send("You have nice collection")
    console.log("hello list")
})
app.get("/list/allmovies", (req,res)=>{
    axios.get("http://localhost:5001/movie/all",
    ).then((response)=>{
        res.json(response.data)
    })
    .catch((error)=>{
        if(error.response.status === 404){
            res.send("Error, empty")
        }
    })

}) 
app.get("/list/allgames",(req,res)=>{
    axios.get("http://localhost:5004/games/all",
    ).then((response)=>{
        res.json(response.data)
    })
    .catch((error)=>{
        if(error.response.status === 404){
            
            res.send("Error, empty")
        }
    })
    
})



app.listen(port, ()=>{
    console.log("listening port: "+port)
})