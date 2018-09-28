'use strict';

const http = require('http');

http
  .createServer((req, res) => {
    setTimeout(() => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end('<div><h1>SYNC-ASYNC</h1></div>');
    }, 3000)
  })
  .listen(3001, function() {
    console.log('Fragment Server listening on port 3001');
  });