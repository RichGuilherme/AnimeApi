import express from "express"
const router = express.Router()
import animeControlles from './controllers/animeControlles'


router.post("/anime", animeControlles.create)
router.get("/animes", animeControlles.all)
router.get("/anime/:id", animeControlles.show)
router.put("/anime/:id", animeControlles.updated)
router.delete("/anime/:id", animeControlles.delete)

export default router