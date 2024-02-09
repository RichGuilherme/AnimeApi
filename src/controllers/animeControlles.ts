import { Request, Response } from 'express'
import Anime from '../model/animesScrema'

class ApiControllers {
    create = async (request: Request, response: Response) => {
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

    all = async (request: Request, response: Response) => {
        try {
           const anime = await Anime.find()
           response.json(anime)
           
        } catch {
            response.status(500).json({
                error: "erro"
            })
        }
    }

    show = async (request: Request, response: Response) => {
        try {
           const anime = await Anime.findById(request.params.id)
           response.json(anime)
           
        } catch {
            response.status(500).json({
                error: "erro"
            })
        }
    }
    

    updated = async (request: Request, response: Response) => {
        try {
           const anime = await Anime.findById(request.params.id)
           
           
        } catch {
            response.status(500).json({
                error: "erro"
            })
        }
    }
    
    delete = async (request: Request, response: Response) => {
        try {
           const anime = await Anime.findByIdAndDelete(request.params.id)
           response.json(anime)
        } catch {
            response.status(500).json({
                error: "erro"
            })
        }
    }

}

export default new ApiControllers