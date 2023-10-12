import express from 'express'
const app = express()
import animes from "./router"
import connectDb from './dataBase/db'

const port = 3000
connectDb()

app.use(express.json());

app.use(animes)

app.listen(port)
