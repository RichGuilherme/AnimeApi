const express = require("express")
const router = express.Router()
const animeControlles = require('./controllers/animeControlles')


router.post("/", animeControlles.add)

module.exports = router