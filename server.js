const express = require('express');
const path = require('path');

const app = express();

//engine pug
app.set('view engine','pug');

//static file
app.use('/images',express.static('images'));


app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'));
})

app.listen(8080)
console.log('server start on port 8080')



