const mongoose = require('mongoose')

const Schema = mongoose.Schema

const testSchema = new mongoose.Schema({
    id: { type: int, required: true },
    text: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Test', testSchema)

