// controllers/principal.controller.js
exports.mostrarPrincipal = (req, res) => {
    console.log("Llamando a mostrarPrincipal");
    res.render('principal/home'); // Renderiza la vista principal.ejs
};

