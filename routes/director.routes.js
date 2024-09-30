module.exports = app => {
    const directorController = require("../controllers/director.controller.js");
    let router = require("express").Router();

    // Crear un nuevo director
    router.post("/directores", directorController.crearDirector);

    // Listar todos los directores
    router.get("/directores", directorController.listarDirectores);

    // Buscar un director por ID
    router.get("/directores/:id", directorController.buscarDirectorPorId);

    // Actualizar un director por ID
    router.put("/directores/:id", directorController.actualizarDirector);

    // Eliminar un director por ID
    router.delete("/directores/:id", directorController.eliminarDirector);
    // Ruta para ver todos los directores
router.get('/directores', directorController.verDirectores);

    app.use('/', router);
};
