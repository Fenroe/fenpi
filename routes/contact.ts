import PromiseRouter from "express-promise-router"
import { sendEmail } from '../controllers'

const router = PromiseRouter()

router.post('/', sendEmail)

export default router
