var express = require('express');
var serveStatic = require('serve-static');

var app = express();

var env = app.get('env');

if(env == 'production') {
  console.log('app running in production mode. make sure you"ve run gulp build for your latest code');
  app.use(serveStatic(__dirname + '/dist'));
}
else {
  app.use(require('connect-livereload')());
  app.use(serveStatic(__dirname + '/public'));
}
console.log('serving app in '+ env +' mode on port 3000. Access the static app at localhost:3000/');
app.listen(3000);
