import express from "express"
const router = express.Router()
import animeControlles from './controllers/animeControlles'


router.post("/anime", animeControlles.create)
router.get("/animes", animeControlles.show)

export default router