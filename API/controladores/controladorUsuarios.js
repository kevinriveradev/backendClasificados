const modeloUsuario = require('../modelos/modeloUsuario');
const controlador = require('./controlador');
const encriptador = require('../servicios/encriptamiento');
const uuid = require('uuid/v1');

class controladorUsuarios extends controlador {
    constructor(req, res, next) {
        super(req, res, next);
    }

    async obtenerTodos() {
        //Recogemos todos los usuarios de la BD  y los enviamos como respuesta.
        try {
            var usuarios = await modeloUsuario.findAll();
            if (usuarios) return this.returnJson(200, usuarios);
        } catch (e) {
            return this.returnJson(500, e);
        }
    }

    async obtenerPorId() {
        let idUsuario = this.req.params.id;
        try {
            let usuario = await modeloUsuario.findAll({ where: { id: idUsuario } });
            if (usuario) return this.returnJson(200, usuario);
        } catch (e) {
            return this.returnJson(500, e);
        }
    }

    async crearUsuario() {
        //Creamor el objeto con los datos obtenidos por el req.body
        var nuevoUsuario = {
            nombre:this.req.body.nombre,
            apellidos: this.req.body.apellidos,
            fechaNacimiento: this.req.body.fechaNacimiento,
            sexo: this.req.body.sexo,
            ciudad: this.req.body.ciudad,
            clave: encriptador.encriptarPass(this.req.body.clave),
            email: this.req.body.email,
            hash: uuid()
        }

        //Guardamos el objeto en la base de datos.
        //Lo ideal para mejorar seria comprobar que no existen usuarios con ese mismo email.
        try {
            let USUARIO = await modeloUsuario.create(nuevoUsuario);
            if (USUARIO) return this.returnJson(200, "Usuario creado correctamente");
        } catch (e) {
            return this.returnJson(500, "Error interno del servidor" );
        }
    }

    async eliminarUsuario() {
        let idUsuario = this.req.params.id;
        try {
            //Eliminamos usuario.
            let usuarioBorrado = await modeloUsuario.destroy({ where: { id: idUsuario } });
            if (usuarioBorrado) return this.returnJson(200, "Usuario borrado correctamente");
            return this.returnJson(400, "Error al borrar");
        } catch (e) {
            return this.returnJson(500, "Error en el servidor");
        }
    }
    /*Metodo usable por todas las funciones de nuestra clase controladorUsuario*/
    returnJson(code, param) {
        this.res.statusCode = code;
        this.res.header('Access-Control-Allow-Origin', '*');
        this.res.send(param);
    }
}

module.exports = controladorUsuarios;