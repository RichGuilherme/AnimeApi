import mongoose from'mongoose'

import Anime from '../model/animesScrema.js'

export default {
    async add(req : any, res : any) {
        const { title, descrition, image_url, gender, numberEps, author, note} = req.body

        const anime = new Anime({ title, descrition, image_url, gender, numberEps, author, note })
        await anime.save()

        res.send(anime)
    }
} 