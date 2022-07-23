import dotenv from 'dotenv'
import express from 'express'
import apiRouter from './routes'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', apiRouter)

app.listen(8080, () => {
  console.log('The application is listening on port 8080')
})