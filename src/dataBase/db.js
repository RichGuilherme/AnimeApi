const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect("mongodb+srv://RichardGui:ygZIuS7qnkrgMvkC@richard.hpe2yfv.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).
        then(() => console.log("banco de dados conectado")).
        catch((erro) => console.error("erro"))
}

module.exports = connectDb