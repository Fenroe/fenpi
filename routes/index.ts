import PromiseRouter from "express-promise-router"
import { default as contactRouter } from './contact'

const router = PromiseRouter()

router.use('/api', contactRouter)

export default router
