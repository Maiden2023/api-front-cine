const db = require("../models");
const Director = db.Director;

// Crear un nuevo director
exports.crearDirector = async (req, res) => {
    const { nombre, foto } = req.body;

    console.log('Datos recibidos:', { nombre, foto });

    try {
        const nuevoDirector = await Director.create(req.body);
        console.log('Director creado:', nuevoDirector);
        res.status(201).send(nuevoDirector); // Devolver el director creado
    } catch (err) {bre
        console.error('Error al crear director:', err);
        res.status(500).send({
            message: err.message || "Error al crear el director."
        });
    }
};

// Listar todos los directores
exports.listarDirectores = async (req, res) => {
    try {
        const data = await Director.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error al listar los directores."
        });
    }
};

// Buscar director por ID
exports.buscarDirectorPorId = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Director.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: `No se encontró el director con ID ${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error al buscar el director."
        });
    }
};

// Actualizar un director
exports.actualizarDirector = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Director.update(req.body, { where: { id } });
        if (num[0] === 1) {
            res.send({ message: "Director actualizado correctamente." });
        } else {
            res.send({ message: `No se pudo actualizar el director con ID ${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar el director."
        });
    }
};

// Eliminar un director
exports.eliminarDirector = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Director.destroy({ where: { id } });
        if (num === 1) {
            res.send({ message: "Director eliminado correctamente." });
        } else {
            res.send({ message: `No se pudo eliminar el director con ID ${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error al eliminar el director."
        });
    }
};
exports.verDirectores = async (req, res) => {
    try {
        const directores = await Director.findAll();
        res.render('directores/listaDirectores', { directores }); // Cambia a la ruta de tu vista
    } catch (err) {
        console.error('Error al listar directores:', err);
        res.status(500).send({
            message: err.message || "Error al listar los directores."
        });
    }
};