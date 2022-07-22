import express from 'express'
import apiRouter from './routes'
const app = express()

app.use('/', apiRouter)

app.listen(8080, () => {
  console.log('The application is listening on port 8080')
})