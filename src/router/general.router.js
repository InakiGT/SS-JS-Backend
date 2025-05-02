import { Router } from 'express'
import passport from 'passport'
import GeneralService from '../services/general.service.js'

function GeneralRouter(model, servicename) {
    const router = Router()
    const service = new GeneralService(model, servicename)

    router.get('/',
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                const response = await service.getItems()
    
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

    router.get('/:id',
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                const { params } = req
                const { id } = params
                const response = await service.getItemById(id)
    
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
        }
    )
    
    router.post('/',
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                const { body } = req
                const response = await service.createItem(body)

                res
                    .status(201)
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
        }
    )

    router.patch('/:id',
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                const { params, body } = req
                const { id } = params
                
                const response = await service.updateItem(id, body)
                res
                    .status(204)
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
        }
    )

    router.delete('/:id',
        passport.authenticate('jwt', { session: false }),
        async (req, res) => {
            try {
                const { params } = req
                const { id } = params

                const response = await service.deleteItem(id)

                res
                    .status(204)
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
        }
    )

    return router
}

export default GeneralRouter