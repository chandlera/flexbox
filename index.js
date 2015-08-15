var express = require('express');
var app = express();
var hostname = process.env.HOSTNAME || 'localhost';
var port = parseInt(process.env.PORT, 10) || 4567;
var publicDir = process.argv[2] || __dirname + '/public';

app.get("/", function(req, res) {
  res.redirect('/index.html');
});

app.use(express.static('public'));

console.log('Simple static server showing %s listening at http://%s:%s', publicDir, hostname, port);
app.listen(port, hostname);
