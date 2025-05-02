import express from 'express'
import config from './config/index.js'
import AppRouter from './router/index.js'
import StartDB from './db/index.js'
import * as _ from './utils/auth/index.js'
import cors from 'cors'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

app.use(express.json())
app.use(cors())
AppRouter(app)
app.use(errorHandler)

StartDB()

app.listen(config.port, () => {
    console.log(`App listening on port ${ config.port }`)
})