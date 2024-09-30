const db = require("../models");
const Actor = db.actores; 
console.log('Actor model:', Actor);

//un nuevo actor
exports.crearActor = async (req, res) => {
    const { nombre, foto } = req.body;

    try {
        if (!nombre || !foto) {
            return res.status(400).send({
                message: "El nombre y la foto son obligatorios."
            });
        }

        const nuevoActor = await Actor.create({ nombre, foto });
        res.status(201).send(nuevoActor); // Devolver el actor creado
    } catch (err) {
        console.error('Error al crear actor:', err);
        res.status(500).send({
            message: err.message || "Error al crear el actor."
        });
    }
};

// Listar todos los actores
exports.listarActores = async (req, res) => {
    try {
        const data = await Actor.findAll();
        res.send(data);
    } catch (err) {
        console.error('Error al listar actores:', err);
        res.status(500).send({
            message: err.message || "Error al listar los actores."
        });
    }
};

// Buscar actor por ID
exports.buscarActorPorId = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Actor.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: `No se encontró el actor con ID ${id}.` });
        }
    } catch (err) {
        console.error('Error al buscar actor:', err);
        res.status(500).send({
            message: "Error al buscar el actor."
        });
    }
};

// Actualizar un actor
exports.actualizarActor = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Actor.update(req.body, { where: { id } });
        if (num[0] === 1) {
            res.send({ message: "Actor actualizado correctamente." });
        } else {
            res.send({ message: `No se pudo actualizar el actor con ID ${id}.` });
        }
    } catch (err) {
        console.error('Error al actualizar actor:', err);
        res.status(500).send({
            message: "Error al actualizar el actor."
        });
    }
};

// Eliminar un actor
exports.eliminarActor = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Actor.destroy({ where: { id } });
        if (num === 1) {
            res.send({ message: "Actor eliminado correctamente." });
        } else {
            res.send({ message: `No se pudo eliminar el actor con ID ${id}.` });
        }
    } catch (err) {
        console.error('Error al eliminar actor:', err);
        res.status(500).send({
            message: "Error al eliminar el actor."
        });
    }
};
