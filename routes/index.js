var express = require('express');
var router = express.Router();
/*CONTROLADORES*/
const controladorUsuarios = require('../API/controladores/controladorUsuarios');
const controladorProductos = require('../API/controladores/controladorProductos');
/*Controlador de autenticacion*/
const Auth = require('../API/middleware/autenticacion').autenticar;

/*------------*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * REST -> USUARIOS
 * /USUARIOS : (GET) OBTENER TODOS LOS USUARIOS. (OK)
 * /USUARIOS/:ID : (GET) OBTENER USUARIO POR ID. (OK)
 * /USUARIOS : (POST) CREAR NUEVO USUARIO. (OK)
 * /USUARIOS : (PUT) MODIFICAR USUARIO EXISTENTE. 
 * /USUARIOS : (DELETE) BORRAR USUARIO (OK)
 * **/
router.get('/usuarios', Auth, function (req, res, next) {
    //OBTENER TODOS LOS USUARIOS.
    let controlador = new controladorUsuarios(req, res, next);
    controlador.obtenerTodos();
});

router.get('/usuarios/:id', function (req, res, next) {
    //OBTENER USUARIO POR ID
    let controlador = new controladorUsuarios(req, res, next);
    controlador.obtenerPorId();
});

router.post('/usuarios', function (req, res, next) {
    //CREAR NUEVO USUARIO.
    let controlador = new controladorUsuarios(req, res, next);
    controlador.crearUsuario();
});

router.delete('/usuarios/:id', function (req, res, next) {
    //ELIMINAR USUARIO USUARIO.
    let controlador = new controladorUsuarios(req, res, next);
    controlador.eliminarUsuario();
});

//LOGIN.
router.post('/usuarios/login', function (req, res, next) {
    //LOGEO
    console.log('entra al login');
    let control = new controladorUsuarios(req, res, next);
    control.loginUsuario();
});

/***
 * REST -> PRODUCTOS
 * /PRODUCTOS :(GET) OBTENER TODOS LOS PRODUCTOS. (OK)
 * /PRODUCTOS: (GET) OBTENER PRODUCTO POR ID. (OK)
 * /PRODUCTOS: (GET) OBTENER TODOS LOS PRODUCTOS DE UN USUARIO. (OK)
 * /PRODUCTOS: (POST) SUBIR UN NUEVO PRODUCTO. (OK)
 * /PRODUCTOS: (DELETE) BORRAR UN PRODUCTO CON SU ID. (OK)
 * */

router.get('/productos', Auth ,function (req, res, next) {
    //OBTENER TODOS LOS PRODUCTOS
    let controlador = new controladorProductos(req, res, next);
    controlador.obtenerProductos();
});

router.get('/productos/:id', Auth ,function (req, res, next) {
    //OBTENER PRODUCTOS MEDIANTE EL ID.
    let controlador = new controladorProductos(req, res, next);
    controlador.obtenerPorId();
})

router.post('/productos', Auth, function (req, res, next) {
    //SUBIR PRODUCTO.
    let controlador = new controladorProductos(req, res, next);
    controlador.subirProducto();
});

router.delete('/productos/:id', Auth ,function (req, res, next) {
    let controlador = new controladorProductos(req, res, next);
    controlador.borrarProducto();
})

module.exports = router;
