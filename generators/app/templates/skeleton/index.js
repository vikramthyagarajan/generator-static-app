var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(require('connect-livereload')());
app.use(serveStatic(__dirname + '/public'));
console.log('serving app on port 3000. Access the static app at localhost:3000/');
app.listen(3000);
