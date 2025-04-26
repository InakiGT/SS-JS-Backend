import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import UserService from './users.service.js'
import bcrypt from 'bcrypt'

class AuthService {
    constructor() {
        this.externalService = new UserService()
    }

    async getUser(email, password) {
        try {
            const user = await this.externalService.getUserByEmail(email)

            if (!user) {
                throw new Error('User does not exist')
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                throw new Error('User does not exist')
            }

            delete user.password

            return user

        } catch (err) {
            console.error(err)
            throw new Error(err)
        }
    }

    async signToken(user) {
        const payload = {
            sub: user._id.toString(),
        }

        const token = jwt.sign(payload, config.jwtSecret)

        return token
    } 
}

export default AuthService