import http from 'http'

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Im running node inside kubernetes served via nginx')
});

server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
})