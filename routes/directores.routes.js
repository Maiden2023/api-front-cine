module.exports = app => {
    const directoresController = require('../controllers/directores.controlles');

    app.get('/directores/crear', directoresController.crearDirector);
    app.get('/directores/editar', directoresController.editarDirector);
    app.get('/directores/eliminar', directoresController.eliminarDirector);
};
