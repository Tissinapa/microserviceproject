const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let gamesSchema = new Schema({
    name: {type: String},
    platform: {type: String}
})

module.exports = mongoose.model("games", gamesSchema)