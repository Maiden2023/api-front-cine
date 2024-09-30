module.exports = app => {
    const actorController = require("../controllers/actor.controller");
    let router = require("express").Router();

    // Crear un nuevo actor
    router.post("/actores", actorController.crearActor);

    // Listar todos los actores
    router.get("/actores", actorController.listarActores);

    // Buscar un actor por ID
    router.get("/actores/:id", actorController.buscarActorPorId);

    // Actualizar un actor por ID
    router.put("/actores/:id", actorController.actualizarActor);

    // Eliminar un actor por ID
    router.delete("/actores/:id", actorController.eliminarActor);

    app.use('/', router);
};
