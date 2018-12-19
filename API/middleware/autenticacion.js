const Jwt = require('jwt-simple');
const Moment = require('moment');
class Autenticacion {
    static autenticar(req, res, next) {
        if (!req.headers.autorizacion) {
            return res.status(401).send('No autorizado');
        }
        let token = req.headers.autorizacion.split(' ')[1];
        let payload = Jwt.decode(token, 'api');
        try {
            if (payload.exp <= Moment().unix) {
                return res.status(401).send('El token expiro');
            }
            req.userId = payload.sub;
            next();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Autenticacion;