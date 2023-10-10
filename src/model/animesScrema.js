const mongoose = require('mongoose')

const AnimesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type:String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    descrition: {
        type: String,
        required: true
    },
    numberEps: {
        type: Number,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    note: {
        type: Number,
        required: false,
        max: 10
    }

})

module.exports = mongoose.model('Anime', AnimesSchema)