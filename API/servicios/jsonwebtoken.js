const Moment = require('moment');
const Jwt = require('jwt-simple');

class webToken{
    static generarToken(user){
        let payload = {
            iss: 'clasificados.com',
            sub: user.id,
            iat: Moment().unix(),
            exp: Moment().add('7', 'days').unix()
        }
        return Jwt.encode(payload, 'api');
    }
}

module.exports = webToken;