const express = require("express")
const app = express()
const port = process.env.PORT ||5004
let mongoose = require("mongoose")
const bodyParser = require("body-parser")

const Game = require("../games/models/Game")

mongoose.set('strictQuery', true)

const mongoDB = "mongodb://localhost:27017/gameservice"
mongoose.connect(mongoDB)
mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/game", (req, res)=>{
    res.send("Games")
}) 
app.post("/game/add", (req,res)=>{
    
    Game.create({
        name: req.body.name,
        platform: req.body.platform
    },
    (err, ok)=>{
        if(err)throw err;
        return res.send("Game added")
    })
    
})
app.get("/game/all", (req,res)=>{
    
    Game.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    })
})

app.listen(port, ()=>{
    console.log("listening port: "+port)
})