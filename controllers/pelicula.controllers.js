
exports.crearPelicula = (req, res) => {
    res.render('peliculas/crearPelicula'); // Renderiza la vista para crear una película
};

// Controlador para editar una película
exports.editarPelicula = (req, res) => {
    res.render('peliculas/editarPelicula'); // Renderiza la vista para editar una película
};
exports.formularioEditar = (req, res) => {
    res.render('peliculas/froEditar'); // Renderiza la vista para editar una película
};

// Controlador para eliminar una película
exports.eliminarPelicula = (req, res) => {
    res.render('peliculas/eliminarPelicula'); // Renderiza la vista para eliminar una película
};
