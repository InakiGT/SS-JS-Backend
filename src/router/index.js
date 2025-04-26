import { Router } from 'express'
import userRouter from './user.router.js'
import authRouter from './auth.router.js'
import GeneralRouter from './general.router.js'
import { PT } from '../db/schemas/pt.schema.js'
import { ImpactoSocial } from '../db/schemas/impactoSocial.schema.js'

const mainRouter = Router()

export default function AppRouter(app) {
    app.use('/api/v1', mainRouter)

    mainRouter.use('/auth', authRouter)
    mainRouter.use('/user', userRouter)
    mainRouter.use('/pt', GeneralRouter(PT, 'PTs'))
    mainRouter.use('/impacto', GeneralRouter(ImpactoSocial, 'Proyecto Impacto Social'))
    mainRouter.use('/project', userRouter)
}