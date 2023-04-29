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
//mongoose.createConnection(gameDB)

mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error")) 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/list", (req, res)=>{
    res.send("You have nice collection")
    console.log("hello list")
})
app.get("/list/all", (req,res)=>{
    console.log("list/all")

    axios.get("http://localhost:5000/movie/all",
    ).then((response)=>{
        let movieObj = {name: response.data[1].name}
        //console.log((response.data))
        //console.log(movieObj)
        //console.log(response)
        console.log(movieObj)
    }).catch(err=>{
        console.log(err)
    })
    res.send("done")

}) 

//http://localhost:5000/movie/all

app.listen(port, ()=>{
    console.log("listening port: "+port)
})