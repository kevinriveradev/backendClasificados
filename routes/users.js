var express = require('express');
var router = express.Router();
const CONTROLADORUSUARIO = require('../API/controladores/controladorUsuarios');

router.post('/', function (req, res, next) {
    //Registro
});

router.post('/login', function (req, res, next) {
    //LOGEO
    console.log('entra al login');
    //let control = new CONTROLADORUSUARIO(req, res, next);
    //control.loginUsuario();
});
module.exports = router;
