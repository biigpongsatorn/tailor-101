const http = require('http')
const Tailor = require('node-tailor')
const tailor = new Tailor({
  templatesPath: __dirname + '/templates'
})
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {
      'Content-Type': 'image/x-icon',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    })
    return res.end('')
  }
  req.headers['x-request-uri'] = req.url
  if (req.url === '/') {
    req.url = '/index'
  }
  tailor.requestHandler(req, res)
}).listen(8080, () => {
  console.log('Tailor server listening on port 8080')
})
