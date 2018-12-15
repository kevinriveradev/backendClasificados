const bcrypt = require('bcrypt');

class encriptadortService {
    static encriptarPass(pass) {
        return bcrypt.hashSync(pass, 10);
    }
    static comparePass(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = encriptadortService;