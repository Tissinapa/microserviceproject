const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let moviesSchema = new Schema({
    name: {type: String},
    format: {type: String}
})

module.exports = mongoose.model("movies", moviesSchema)