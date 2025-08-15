// Create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
	res.send('Servidor de comentarios en funcionamiento');
});

// Iniciar el servidor
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});














