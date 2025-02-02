const http = require('http');

const server = http.createServer((req, res) => {
  // Error: Trying to access res.writeHead() before setting headers
  res.write('Hello, World!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});