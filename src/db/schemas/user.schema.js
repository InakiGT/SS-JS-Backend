import { Schema, model } from 'mongoose'

export const userSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userName: String,
    email: String,
    password: String,
})

export const User = model('User', userSchema)