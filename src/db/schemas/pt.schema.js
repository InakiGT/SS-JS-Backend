import { Schema, model } from 'mongoose'

export const ptSchema = new Schema({
    title: String,
    subtitle: String,
    content: {
        link: String,
        creator: String,
        content: String,
        technologies: [String],
    }
})

export const PT = model('PT', ptSchema)