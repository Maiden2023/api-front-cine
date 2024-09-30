// Importación de módulos
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const session = require('express-session');


const app = express();

// Configuración del motor de plantillas (si necesitas renderizar vistas)
app.set('view engine', 'ejs');

// Configuración del middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Permitir solo esta dirección
    methods: ['*'], // Métodos permitidos
    credentials: true // Permitir el uso de credenciales (si es necesario)
};
app.use(cors(corsOptions));

// Archivos estáticos (por ejemplo, imágenes, css, etc.)
app.use(express.static('public'));

// Configuración de la subida de archivos
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // Límite de 50MB para los archivos
}));

// Configuración de sesiones
app.use(session({
    secret: 'esta es la clave de encriptación de la sesión y puede ser cualquier texto',
    resave: false,
    saveUninitialized: true,
}));


// Conexión y sincronización de la base de datos
const db = require("./models");
db.sequelize.sync({
    // force: true // Habilitar esta opción si quieres que las tablas se eliminen y se creen de nuevo
}).then(() => {
    console.log("Sincronización de la base de datos completada.");
});

// Middleware para manejo de errores en JSON
app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) {
        res.status(400).json({ msg: 'Error en el formato JSON' });
    } else {
        next();
    }
});

// Importación de las rutas
require('./routes')(app);

// Servidor escuchando en el puerto 4000
app.listen(4000, function () {
    console.log('El servidor está corriendo en http://localhost:4000');
});
