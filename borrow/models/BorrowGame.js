const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let borrowGamesSchema = new Schema({
    name: {type: String, required: true }
    
})

module.exports = mongoose.model("borrowGames", borrowGamesSchema)