import { Router } from 'express'
import UserService from '../services/users.service.js'
import passport from 'passport'

const userRouter = Router()
const userService = new UserService()

userRouter.get('/', async (req, res) => {
    try {
        const users = await userService.getUsers()
        res
            .status(200)
            .json({ data: users })
    } catch(err) {
        res
            .status(500)
            .json({
                data: {
                    msg: 'Internal server error'
                }
            })
    }
})

userRouter.get('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
    try {
        const users = await userService.getUserById(req.params.id)

        res
            .status(200)
            .json({ data: users })
    } catch(err) {
        res
            .status(500)
            .json({
                error: 'Internal server error'
            })
    }
})

userRouter.post('/',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
    try {
        const { body } = req
        const user = await userService.createUser(body)

        res
            .status(201)
            .json({
                data: user
            })
    } catch(err) {
        res
        .status(500)
        .json({
            error: 'Internal server error'
        })
    }
})

userRouter.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
    try {
        const { body, params } = req
        const { id } = params

        const response = await userService.updateUser(id, body)

        res
        .status(200)
        .json({
            data: response
        })
    } catch(err) {
        res
        .status(500)
        .json({
            error: 'Internal server error'
        })
    }
})

userRouter.delete('/:id', 
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
    try {
        const { params } = req
        const { id } = params

        const response = await userService.deleteUser(id)

        res
        .status(200)
        .json({
            data: response
        })
    } catch ( err ) {
        res
        .status(500)
        .json({
            error: 'Internal server error'
        })
    }
})

export default userRouter