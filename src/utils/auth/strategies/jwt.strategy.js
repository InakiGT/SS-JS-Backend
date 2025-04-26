import { ExtractJwt, Strategy } from 'passport-jwt';
import config from '../../../config/index.js'

const JwtStrategt = new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}, (  payload, done ) => done(null, payload))

export default JwtStrategt