// routes/peliculas.routes.js

module.exports = app => {
    const peliculasController = require('../controllers/pelicula.controllers'); // Importa el controlador

    // Define las rutas para cada acción
    app.get('/peliculas/crear', peliculasController.crearPelicula);
    app.get('/peliculas/editar', peliculasController.editarPelicula);
    app.get('/peliculas/eliminar', peliculasController.eliminarPelicula);
};
