exports.listarReparto = (req, res) => {
    res.send("Lista del reparto");
    
};

exports.crearReparto = (req, res) => {
    
    res.render('reparto/crearReparto');
};

exports.editarReparto = (req, res) => {
   
    res.render('reparto/editarReparto');
};

exports.eliminarReparto = (req, res) => {

    res.render('reparto/eliminarReparto');
};