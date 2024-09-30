const db = require("../models");
const Pelicula = db.Pelicula;

// Obtener todas las películas
exports.todasLasPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.findAll({
            include: [
                { model: db.Director, as: 'director' },
                { model: db.Actores, as: 'actores' }
            ],
            order: [['rottenTomatoesRating', 'DESC']], 
        });
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las películas' });
    }
};

// Crear una nueva película
exports.crearPelicula = async (req, res) => {
    const { titulo, sinopsis, imagen, releaseDate, rottenTomatoesRating , youtubeTrailer } = req.body;

    try {
        const nuevaPelicula = await Pelicula.create({
            titulo,
            sinopsis, // Asegúrate de usar 'sinopsis'
            imagen,
            releaseDate,
            rottenTomatoesRating,
            youtubeTrailer
        });
        res.status(201).send(nuevaPelicula); // Devuelve la película creada
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error al crear la película."
        });
    }
};

// Listar todas las películas
exports.listarPeliculas = async (req, res) => {
    try {
        const data = await Pelicula.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error al listar las películas."
        });
    }
};


// Controlador para obtener la película a editar
exports.editarPelicula = async (req, res) => {
    const peliculaId = req.params.id;

    try {
        // Busca la película por ID
        const pelicula = await Pelicula.findById(peliculaId).populate('director').populate('actores');
        if (!pelicula) {
            return res.status(404).send('Película no encontrada');
        }

        // Busca todos los directores y actores para llenar los select
        const directores = await Director.find(); // Cambia esto según tu modelo
        const actores = await Actor.find(); // Cambia esto según tu modelo

        // Renderiza la vista de edición y pasa los datos necesarios
        res.render('peliculas/editarPelicula', { pelicula, directores, actores });
    } catch (error) {
        console.error('Error al obtener la película:', error);
        res.status(500).send('Error al obtener la película');
    }
};
// Actualizar una película
exports.actualizarPelicula = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Pelicula.update(req.body, { where: { id } });
        if (num[0] === 1) return res.send({ message: "Película actualizada correctamente." });
        return res.status(404).send({ message: `No se pudo actualizar la película con ID ${id}.` });
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar la película."
        });
    }
};

// Eliminar una película
exports.eliminarPelicula = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Pelicula.destroy({ where: { id } });
        if (num === 1) return res.send({ message: "Película eliminada correctamente." });
        return res.status(404).send({ message: `No se pudo eliminar la película con ID ${id}.` });
    } catch (err) {
        res.status(500).send({
            message: "Error al eliminar la película."
        });
    }
};
// Obtener detalles de una película por ID
exports.obtenerPeliculaPorId = async (req, res) => {
    const peliculaId = req.params.id;

    try {
        const pelicula = await Pelicula.findByPk(peliculaId, {
            include: [
                { model: db.Director, as: 'director' },
                { model: db.Actores, as: 'actores' }
            ]
        });

        if (!pelicula) {
            return res.status(404).send('Película no encontrada');
        }

        // Renderiza la vista de detalles de la película
        res.render('peliculas/detallePelicula', { pelicula });
    } catch (error) {
        console.error('Error al obtener la película:', error);
        res.status(500).send('Error al obtener la película');
    }
};
