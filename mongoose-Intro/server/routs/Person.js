const mongoose = require('mongoose')

const Person = mongoose.model('Person', new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
}, { collection: "people" }, { multi: true }))

module.exports = Person