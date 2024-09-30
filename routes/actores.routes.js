module.exports = app => {
    const actoresController = require('../controllers/actores.controllers');

    app.get('/actores/crear', actoresController.crearActor);
    app.get('/actores/editar', actoresController.editarActor);
    app.get('/actores/eliminar', actoresController.eliminarActor);
};
