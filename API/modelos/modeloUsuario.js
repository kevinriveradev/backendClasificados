const Sequelize = require('sequelize');
const Configuracion = require('../configuracion/Sequelize');
const conexion = Configuracion.obtenerConexion();

const USUARIO = conexion.define('usuarios', {
    nombre: {
        type: Sequelize.STRING(45)
    },
    apellidos: {
        type: Sequelize.STRING(45)
    },
    fechaNacimiento: {
        type: Sequelize.DATE()
    },
    sexo: {
        type: Sequelize.STRING(15)
    },
    ciudad: {
        type: Sequelize.STRING(40)
    },
    clave: {
        type: Sequelize.STRING(100)
    },
    email: {
        type: Sequelize.STRING(150)
    },
    hash: {
        type: Sequelize.STRING(150)
    }
});

module.exports = USUARIO;