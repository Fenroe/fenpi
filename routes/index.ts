import PromiseRouter from "express-promise-router"
import { default as contactRouter } from './contact'
import { default as projectsRouter } from './projects'

const router = PromiseRouter()

router.use('/contact', contactRouter)
router.use('/projects', projectsRouter)

export default router
