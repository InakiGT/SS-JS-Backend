import { Schema, model } from 'mongoose'

export const ImpactoSocialSchema = new Schema({
    title: String,
    img: String,
    subtitle: String,
    content: {
        link: String,
        creator: String,
        content: String,
        technologies: [String],
        perks: [
            { title: String, description: String }
        ]
    }
})

export const ImpactoSocial = model('ProyectosImpactoSocial', ImpactoSocialSchema)