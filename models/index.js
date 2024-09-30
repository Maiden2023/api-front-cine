const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Inicializa la conexión con la base de datos
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: "mysql",
    }
);

// Objeto que contendrá todos los modelos
const db = {
    Sequelize,
    sequelize,
    Pelicula: require("./pelicula.model.js")(sequelize, Sequelize),
    Actores: require("./actores.model.js")(sequelize, Sequelize.DataTypes),
    Director: require("./director.model.js")(sequelize, Sequelize),
};

// Asociaciones entre modelos

// Asociación Director y Pelicula
db.Director.hasMany(db.Pelicula, { as: "peliculas" });
db.Pelicula.belongsTo(db.Director, {
    foreignKey: "directorId",
    as: "director",
});

// Asociación Pelicula y Actores (muchos a muchos)
db.Pelicula.belongsToMany(db.Actores, {
    through: "pelicula_actor",
    as: "actores",
    foreignKey: "peliculaId",
});
db.Actores.belongsToMany(db.Pelicula, {
    through: "pelicula_actor",
    as: "peliculas",
    foreignKey: "actorId",
});

module.exports = db;

