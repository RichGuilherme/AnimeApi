import mongoose from 'mongoose'

const AnimesSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
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

export default  mongoose.model('Anime', AnimesSchema)