import PromiseRouter from "express-promise-router"
import { default as contactRouter } from './contact'

const router = PromiseRouter()

router.use('/contact', contactRouter)

export default router
