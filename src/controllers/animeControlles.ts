import { Request, Response } from 'express'
import Anime from '../model/animesScrema'

class ApiControllers {
    async create(request: Request, response: Response) {
        try {
            const { title, descrition, image_url, gender, numberEps, author, note } = request.body

            const anime = await Anime.create({
                title,
                descrition,
                image_url,
                gender,
                numberEps,
                author,
                note
            })

            await anime.save()
            response.json(anime)
        } catch {
            response.status(500).json({
                error: "creation failed",
                message: Error
            })
        }
    }

    async show(request: Request, response: Response) {
        try {
           const anime = await Anime.find()
           response.json(anime)
           
        } catch {
            response.status(500).json({
                error: "erro"
            })
        }
    }
}

export default new ApiControllers