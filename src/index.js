import express from 'express'
import config from './config/index.js'
import AppRouter from './router/index.js'
import StartDB from './db/index.js'
import * as _ from './utils/auth/index.js'

const app = express()

app.use(express.json())
AppRouter(app)

StartDB()

app.listen(config.port, () => {
    console.log(`App listening on port ${ config.port }`)
})