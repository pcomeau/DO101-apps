var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello from Mars!\n');
});

app.get('/venus', function (req, res) {
  res.send('Hello from Venus!\n');
});

app.get('/venus', function (req, res) {
  res.send('Hello from Saturn!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

