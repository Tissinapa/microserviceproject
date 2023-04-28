const express = require("express")
const app = express()
const port = process.env.PORT || 5004
let mongoose = require("mongoose")
const bodyParser = require("body-parser")

//const Movie = require("../movies/models/Movie")

mongoose.set('strictQuery', true)

const mongoDB = "mongodb://localhost:27017/borrowservice"
mongoose.connect(mongoDB)
mongoose.Promise = Promise

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/borrow", (req, res)=>{
    res.send("borrow")
}) 
app.post("/borrow/movie", (req,res)=>{
    
/*     Movie.create({
        name: req.body.name,
        format: req.body.format
    },
    (err, ok)=>{
        if(err)throw err;
        return res.send("Movie added")
    }) */
    
})
app.post("/borrow/game", (req,res)=>{
    
/*     Movie.create({
        name: req.body.name,
        format: req.body.format
    },
    (err, ok)=>{
        if(err)throw err;
        return res.send("Movie added")
    }) */
    
})

app.listen(port, ()=>{
    console.log("listening port: "+port)
})