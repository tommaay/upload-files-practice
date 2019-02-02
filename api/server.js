const express = require('express');
const server = express();
const middleware = require('../config/middleware');

middleware(server);

server.get('/', (req, res) => {
   res.send('Sanity check good!');
});

module.exports = server;
