const controlador = require('./controlador');
const modeloProducto = require('../modelos/modeloProducto');

class controladorProductos extends controlador {
    constructor(req, res, next) {
        super(req, res, next);
    }

    async obtenerProductos() {
        let id = this.req.userId;
        try {
            let PRODUCTOS = await modeloProducto.findAll({ where: {idUsuario:id}});
            if (PRODUCTOS) return this.returnJson(200, PRODUCTOS); 
        } catch (e) {
            return this.returnJson(500, "Error del servidor: " + e);
        }
    }

    async obtenerPorId() {
        let idProducto = this.req.params.id;
        try {
            let PRODUCTO = await modeloProducto.findAll({ where: { id: idProducto } });
            if (PRODUCTO) return this.returnJson(200, PRODUCTO);
        } catch (e) {
            return this.returnJson(500, "Error interno del servidor: " + e);
        }
    }


    async subirProducto() {       
        let producto = {
                "idUsuario": this.req.body.idUsuario,
                "titulo": this.req.body.titulo,
                "precio": this.req.body.precio,
                "categoria": this.req.body.categoria,
                "descripcion": this.req.body.descripcion,
                "estado": this.req.body.estado
        }
        try {
            let SUBIDA = await modeloProducto.create(producto);
            if (SUBIDA) return this.returnJson(200, "Producto subido correctamente");
        } catch (e) {
            return this.returnJson(500, "Error interno del servidor" + e);
        }
        
    }

    async borrarProducto() {
        let idProducto = this.req.params.id;
        try {
            let RESPUESTA = await modeloProducto.destroy({ where: { id: idProducto } });
            if (RESPUESTA) return this.returnJson(200, "Borrado correctamente");
        } catch (e) {
            return this.returnJson(500, "Error interno del servidor" + e);
        }
    }

    returnJson(code, param) {
        this.res.statusCode = code;
        this.res.header('Access-Control-Allow-Origin', '*');
        this.res.send(param);
    }
}

module.exports = controladorProductos;