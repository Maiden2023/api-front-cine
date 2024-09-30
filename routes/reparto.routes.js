module.exports = app => {
    const repartoController = require('../controllers/reparto.controllers');

    app.get('/reparto/crear', repartoController.crearReparto);
    app.get('/reparto/editar', repartoController.editarReparto);
    app.get('/reparto/eliminar', repartoController.eliminarReparto);
};
