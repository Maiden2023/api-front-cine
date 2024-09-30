// routes/principal.routes.js
module.exports = app => {
    let router = require("express").Router();
    const controller = require('../controllers/principal.controllers'); 

    // Definir la ruta para la vista principal
    router.get("/", controller.mostrarPrincipal);

    app.use('/principal', router); // Todas las rutas principales usarán '/principal'
};
