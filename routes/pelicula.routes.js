module.exports = app => {
    const peliculaController = require("../controllers/pelicula.controller.js");
    let router = require("express").Router();

    // Crear una nueva película
    router.post("/peliculas", peliculaController.crearPelicula);

    // Listar todas las películas
    router.get("/peliculas", peliculaController.todasLasPeliculas); // Usa 'todasLasPeliculas' para incluir actores y directores

    router.get('/editar/:id', peliculaController.editarPelicula);
    // Buscar película por ID   
   // router.get("/peliculas/:id", peliculaController.buscarPeliculaPorId);

    // Actualizar una película por ID
    router.put("/peliculas/:id", peliculaController.actualizarPelicula);

    // Eliminar una película por ID
    router.delete("/peliculas/:id", peliculaController.eliminarPelicula);

    // Ruta para obtener detalles de una película
    router.get('/peliculas/:id', peliculasController.obtenerPeliculaPorId );

    app.use('/', router);
};