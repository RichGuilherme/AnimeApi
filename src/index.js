const express = require('express')
const app = express()
const animes = require("./router.js")
const connectDb = require('./dataBase/db.js')

const port = 3000
connectDb()

app.use(express.json());

app.use("/api", animes)

app.listen(port)