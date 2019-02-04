const express = require('express');
const server = express();
const middleware = require('../config/middleware');

var multer = require('multer');

var storage = multer.diskStorage({
   filename: (req, file, callback) => {
      callback(null, Date.now() + file.originalname);
   },
});

var imageFilter = (req, file, cb) => {
   // accept image files only
   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
   }
   cb(null, true);
};

var upload = multer({ storage: storage, fileFilter: imageFilter });

var cloudinary = require('cloudinary');
cloudinary.config({
   cloud_name: 'tommaay',
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

middleware(server);

server.get('/', (req, res) => {
   res.send('Sanity check good!');
});

module.exports = server;
