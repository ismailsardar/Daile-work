const http = require('http');
const fs = require('fs');
// console.log(http);
const readFile = fs.readFileSync('index.html','utf-8');
const imagFile = fs.readFileSync('helping.png');
const cssFile = fs.readFileSync('style.css','utf-8');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(readFile);
        res.end();
    }else if(req.url === '/helping.png'){
        res.writeHead(200,{'Content-Type':'image/png'});
        res.write(imagFile);
        res.end();
    }else if(req.url === '/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(cssFile);
        res.end();
    }
});

server.listen(5050);
console.log('server is rining');