#! /opt/homebrew/bin/node
const http = require('http')

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

app.get('/home') => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Home Page\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
