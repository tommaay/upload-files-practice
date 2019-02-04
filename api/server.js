const express = require('express');
const server = express();
const middleware = require('../config/middleware');

var imageFilter = (req, file, cb) => {
   // accept image files only
   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
   }
   cb(null, true);
};

middleware(server);

server.get('/', (req, res) => {
   res.send('Sanity check good!');
});

module.exports = server;
