const express = require("express")
const app = express()
const port = process.env.PORT || 5005
let mongoose = require("mongoose")
const bodyParser = require("body-parser")
const BorrowGame = require("../borrow/models/BorrowGame")
const BorrowMovie = require("../borrow/models/BorrowMovie")

mongoose.set('strictQuery', true)

const mongoDB = "mongodb://localhost:27017/borrowservice"
mongoose.connect(mongoDB)
mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(bodyParser.json()); 
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/borrow", (req, res)=>{
    res.send("borrow")
})
//add new data to borrowmovie 
app.post("/borrow/movie", (req,res)=>{
    BorrowMovie.create({
        name: req.body.name
    },
    (err, ok)=>{
        if(err){
            res.send("Error, input movie name")
        }else{
            return res.send("Movie borrowed")
        }
    })
    
})
//add new data to borrowgame
app.post("/borrow/game", (req,res)=>{
    BorrowGame.create({
        name: req.body.name
    },
    (err, ok)=>{
        if(err){
            res.send("Error, input game name")
        }else{
            return res.send("Game borrowed")
        }
    })
    
})
//Finds movie that you have borrowed and then removes it from database
app.post("/borrow/return/movie", (req,res)=>{
    BorrowMovie.findOneAndRemove({name: req.body.name},(err, data)=>{
        if(err || !data){
            res.send("Movie '"+req.body.name+"' was never borrowed or typo...")
        }else{
            return res.json("Movie returned back to owner")
        }
        
    })
    
})
//Finds game that you have borrowed and then removes it from database
app.post("/borrow/return/game", (req,res)=>{
    BorrowGame.findOneAndDelete({name: req.body.name},(err, data)=>{
        if(err || !data){
            res.send("Game '"+req.body.name+"' was never borrowed or typo...")
        }else{
            return res.json("Game returned back to owner")
        }
        
    })
    
})
//Get data from borrowmovies database
app.get("/borrow/allmovies", (req,res)=>{
    
    BorrowMovie.find((err,data)=>{
        if(err){
            console.log(err)
        }else if(data.length === 0){
            res.send("You have borrowed zero movies")
        }else{
            res.json(data)
        }
    })

})
//Get data from borrowgames database
app.get("/borrow/allgames", (req,res)=>{
    
    BorrowGame.find((err,data)=>{
        if(err){
            console.log(err)
        }else if(data.length === 0){
            res.send("You have borrowed zero games")
        }else{
            res.json(data)
        }
    })

})



app.listen(port, ()=>{
    console.log("listening port: "+port)
})