import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import apiRouter from './routes'
import compression from 'compression'
import helmet from 'helmet'

dotenv.config()

const app = express()

const corsOptions = {
  origin: process.env.CORS_ORIGIN
}

app.use(compression())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions))
app.use('/api', apiRouter)

app.listen(process.env.PORT, () => {
  console.log('The application is listening on port' + process.env.PORT)
})
