const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})



const CityWeather = mongoose.model("CityWeather", CitySchema)
module.exports = CityWeather