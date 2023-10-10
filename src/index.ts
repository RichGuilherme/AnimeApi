import express from 'express'
const app = express()
import animes from "./router.js"
import connectDb from './dataBase/db.js'

const port = 3000
connectDb()

app.use(express.json());

app.use("/api", animes)

app.listen(port)