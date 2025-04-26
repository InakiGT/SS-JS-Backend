import { Router } from 'express'
import passport from 'passport'
import AuthService from '../services/auth.service.js'

const authRouter = Router()
const authService = new AuthService()

authRouter.post('/', 
    passport.authenticate('local', { session: false }),
    async (req, res) => {
    try {
        const response = await authService.signToken(req.user)

        res
            .status(200)
            .json({
                data: response
            })
    } catch(err) {
        res
            .status(401)
            .json({ error: 'Unauthorizated' })
    }
})


export default authRouter