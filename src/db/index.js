import mongoose from 'mongoose'
import config from '../config/index.js'

export default async function StartDB() {
    await mongoose.connect(config.mongoURI)
}