import express from "express"
const router = express.Router()
import animeControlles from './controllers/animeControlles'


router.post("/", animeControlles.add)

export default router