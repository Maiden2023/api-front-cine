module.exports = (sequelize, Sequelize) => {
    const Director = sequelize.define("director", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        foto: {
            type: Sequelize.STRING
        }
    });
    return Director;
};
