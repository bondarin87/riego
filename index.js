const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
app.use("/", express.static("public"));

const server = http.createServer(app);

// Configuración de arranque para Node-RED
const settings = require('./settings.js');

RED.init(server, settings);
app.use(settings.httpAdminRoot || "/admin", RED.httpAdmin);
app.use(settings.httpNodeRoot || "/", RED.httpNode);

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`[OK] Servidor escuchando en el puerto ${port}`);
    RED.start();
});
