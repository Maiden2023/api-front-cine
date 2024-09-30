module.exports = (sequelize , Sequelize)=>{
    const Pelicula = sequelize.define('Pelicula', {
        titulo: {
            type: Sequelize.STRING, 
            allowNull: false },
        sinopsis: { 
            type: Sequelize.TEXT, 
            allowNull: false },
        imagen: { 
            type: Sequelize.STRING },
        releaseDate: { 
            type: Sequelize.DATE },
        rottenTomatoesRating: { 
            type: Sequelize.FLOAT },
        youtubeTrailer: { 
            type: Sequelize.STRING }   
});
return Pelicula;
}