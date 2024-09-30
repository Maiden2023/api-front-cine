module.exports = app => {
    require('./peliculas.routes')(app);
    require('./directores.routes')(app);
    require('./actores.routes')(app);
    require('./reparto.routes')(app);
    require('./principal.routes')(app);
};
