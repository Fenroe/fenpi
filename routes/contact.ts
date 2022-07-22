import PromiseRouter from "express-promise-router"

const router = PromiseRouter()

router.post('/', (req, res, next) => {
  res.send('Hello')
})

export default router
