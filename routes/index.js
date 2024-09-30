module.exports = app => {
    // Importar las rutas individuales
    require('./pelicula.routes')(app);
    require('./actor.routes')(app);
    require('./director.routes')(app);
    
};