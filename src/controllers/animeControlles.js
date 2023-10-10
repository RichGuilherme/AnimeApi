const mongoose = require('mongoose');

const Anime = require('../model/animesScrema.js')

module.exports = {
    async add(req, res) {
        const { title, descrition, image_url, gender, numberEps, author, note} = req.body

        const anime = new Anime({ title, descrition, image_url, gender, numberEps, author, note })
        await anime.save()

        res.send(anime)
    }
} 