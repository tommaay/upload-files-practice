const express = require('express');
const server = express();
const middleware = require('../config/middleware');
const { multerUploads, dataUri } = require('../middleware/multer');
const { cloudinaryConfig, uploader } = require('../config/cloudinaryConfig');

// var imageFilter = (req, file, cb) => {
//    // accept image files only
//    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
//       return cb(new Error('Only image files are allowed!'), false);
//    }
//    cb(null, true);
// };

middleware(server);
cloudinaryConfig(server);

server.get('/', (req, res) => {
   res.send('Sanity check good!');
});

server.post('/upload', multerUploads, (req, res) => {
   console.log('req.file:', req.file);
   if (req.file) {
      const file = dataUri(req).content;
      return uploader.upload(file).then(result => {
         const image = result.url;
         return res
            .status(200)
            .json({
               message:
                  'Your image has been uploaded successfully to cloudinary',
               data: { image },
            })
            .catch(err =>
               res
                  .status(400)
                  .json({
                     message:
                        'Something went wrong while processing your request',
                     data: { err },
                  })
            );
      });
   }
});

module.exports = server;
