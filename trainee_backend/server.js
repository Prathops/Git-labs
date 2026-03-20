const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Backend service is successfully running!\n');
});
server.listen(8080, () => {
  console.log('Backend listening on port 8080');
});
