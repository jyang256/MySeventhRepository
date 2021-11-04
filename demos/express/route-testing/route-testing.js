const express = require('express');
const app = express(); // creating an express object

const port = 8000; // setting server port to 8000

app.use(express.static(__dirname + '/public'));

// creating routes
app.get('/', function (req, res) {
  res.send('home');
});

// Fall-through
app.get('*', function (req, res) {
  res.status(404).sendFile(__dirname + '/public/bad.html');
});

// listening server
app.listen(port, function (err) {
  if (err) {
    console.log('error while starting server');
  } else {
    console.log('server has been started at port ' + port);
  }
});
