// controllers/directores.controllers.js

exports.crearDirector = (req, res) => {
    res.render('director/crearDirector');
};

exports.editarDirector = (req, res) => {
    res.render('director/editarDirector');
};

exports.eliminarDirector = (req, res) => {
    res.render('director/eliminarDirector');
};
