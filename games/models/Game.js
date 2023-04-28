const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let gamesSchema = new Schema({
    name: {type: String, required: true },
    platform: {type: String, required: true}
})

module.exports = mongoose.model("games", gamesSchema)