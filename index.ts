import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import apiRouter from './routes'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

const mongoCredentials = process.env.MONGODB_CREDENTIALS!

mongoose.connect(mongoCredentials)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', apiRouter)

app.listen(8080, () => {
  console.log('The application is listening on port 8080')
})
