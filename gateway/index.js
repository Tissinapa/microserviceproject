const express = require("express")
const cors = require("cors")
const proxy = require("express-http-proxy")

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())



/* app.use("/movie", proxy("http://localhost:5001"))
app.use("/", proxy("http://localhost:5002"))//List
app.use("/hardware", proxy("http://localhost:5003"))
app.use("/game", proxy("http://localhost:5004"))
app.use("/borrow", proxy("http://localhost:5005")) */


app.listen(port,()=>{
    console.log("getaway listening port:"+port)
})
