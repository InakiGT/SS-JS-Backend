import { Schema, model } from 'mongoose'

export const MaterialSchema = new Schema({
    title: String,
    img: String,
    subtitle: String,
    content: [{
        title: String,
        link: String,
        content: String,
    }]
})

export const Material = model('Material', MaterialSchema)