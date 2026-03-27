const http = require("node:http");

const server = http.createServer((req, res) => {
    if(req.url === "/secret") {
        return res.end("Secret data leaked");
    }
    return res.end("Heello world!!");
})

server.listen(5555);