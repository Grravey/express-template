const app = require('express')();
const server = require('http').createServer(app);
const path = require('path');

const HTTP_PORT = 3000;

function middleware(req, res, next) {
  req.middleware = 'hello';
  next();
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/middleware', middleware, (req, res) => {
  res.send(req.middleware);
});

app.get('/test', (req, res) => {
  res.send('inside test');
});

server.listen(HTTP_PORT, function() {
  console.log('listening on port: ', HTTP_PORT);
});
