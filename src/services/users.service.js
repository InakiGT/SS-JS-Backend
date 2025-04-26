import { User } from '../db/schemas/user.schema.js'
import bcrypt from 'bcrypt'

class UserService {
    async getUsers() {
        try {
            const response = await User.find()

            return response
        } catch( err ) {
            console.error(err)
            throw new Error('Error attemping to get users from db')
        }
    }

    async getUserById(id) {
        try {
            const response = await User.findById(id).exec()

            return response
        } catch( err ) {
            console.error(err)
            throw new Error('Error attemping to get an user from db')
        }
    }

    async getUserByEmail(email) {
        try { 
            const response = await User.findOne({ email })

            return response
        } catch( err ) {
            console.error(err)
            throw new Error('Error attemping to get an user from db')
        }
    }

    async createUser(data) {
        try {
            const password = await bcrypt.hash(data.password, 10)
            delete data.password

            const user = new User({ ...data, password })
            const response = await user.save()

            return response
        } catch( err ) {
            console.error(err)
            throw new Error('Error attemping to insert an user into db')
        }
    }

    async updateUser(id, data) {
        try {
            if ( data.password ) {
                const password = await bcrypt.hash(data.password, 10)
                data.password = password
            }
            
            const response = await User.findByIdAndUpdate({ _id: id }, { ...data })

            return response
        } catch( err ) {
            console.error(err)
            throw new Error('Error attemping to update an user into db')
        }
    }

    async deleteUser(id) {
        try {
            await User.findByIdAndDelete({ _id: id })

            return "USER REMOVED"
        } catch( err ) {
            console.error(err)
            throw new Error('Error attemping to delete an user from db')
        }
    }
}

export default UserService