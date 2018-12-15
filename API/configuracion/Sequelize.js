const Sequelize = require('sequelize');

class sequelize {
    static obtenerConexion() {
        return new Sequelize('clasificadosDB', 'root', 'mysql', {
            host: '127.0.0.1',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 1000
            }
        });
    }
}

module.exports = sequelize;