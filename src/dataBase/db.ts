import mongoose, { ConnectOptions } from 'mongoose'
import "dotenv/config"

const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URI || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
    .then(() => console.log("banco de dados conectado"))
    .catch((erro) => console.error("erro"))
}

export default connectDb