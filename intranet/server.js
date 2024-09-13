const express = require('express');
const path = require('path');
const app = express();

const imageDirectory = 'D:/EventPhotos';

app.use('/images', express.static(imageDirectory));

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
