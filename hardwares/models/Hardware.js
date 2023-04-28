const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let hardwaresSchema = new Schema({
    device: {type: String, required: true}
})

module.exports = mongoose.model("hardwares", hardwaresSchema)