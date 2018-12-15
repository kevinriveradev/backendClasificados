const Sequelize = require('sequelize');
const configuracion = require('../configuracion/Sequelize');
const conexion = configuracion.obtenerConexion();


const PRODUCTO = conexion.define('productos', {
    idUsuario: {
        type: Sequelize.INTEGER()
    },
    titulo: {
        type: Sequelize.STRING(70)
    },
    precio: {
        type: Sequelize.INTEGER(250)
    },
    categoria: {
        type: Sequelize.STRING(80)
    },
    descripcion: {
        type: Sequelize.STRING(650)
    },
    estado: {
        type: Sequelize.BOOLEAN()
    },
});

module.exports = PRODUCTO;
