// index.js
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({ extended: false }))
// Servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.set('views', path.join(__dirname, 'views')); // Define la carpeta de vistas

// Middleware para servir archivos estáticos (como CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));
// Agrega esta línea para establecer un alias para componentes
app.locals.componentsDir = path.join(__dirname, 'views', 'components');

// Importar rutas
require('./routes')(app); // Asegúrate de que este archivo existe y tiene el código correcto

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
