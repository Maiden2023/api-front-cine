module.exports = (sequelize, Sequelize) => {
    const Actor = sequelize.define("actor", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        foto: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'actors', // Especificamos el nombre exacto de la tabla
    });
    return Actor;
};
