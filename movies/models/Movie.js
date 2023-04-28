const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let moviesSchema = new Schema({
    name: {type: String, required: true},
    format: {type: String, required: true}
})

module.exports = mongoose.model("movies", moviesSchema)