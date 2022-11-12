let http = require('http');
let PORT = 5050;
 
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200,{'Contant-Type':'text/html'});
        res.write('<h1>This is Home page...</h1>');
        res.end()
    }else if (req.url == '/about'){
        res.writeHead(200,{'Contant-Type':'text/html'});
        res.write('<h1>This is About page...</h1>');
        res.end()
    }
    else if (req.url == '/contact'){
        res.writeHead(200,{'Contant-Type':'text/html'});
        res.write('<h1>This is Contact page...</h1>');
        res.end()
    
    }else if (req.url == '/blog'){
        res.writeHead(200,{'Contant-Type':'text/html'});
        res.write('<h1>This is Blog page...</h1>');
        res.end()
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write('<p>404 ! This server is Filed....!!!</p>');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`server is raning at http://localhost:${PORT}`);
});



// let server = http.createServer((req,res) => {
//     if(req.url=='/'){
//         res.writeHead(201, {'Content-Type':'text/html'});
//         res.write('<h1>This is home Page..</h1>');
//         res.end();
//     }else if(req.url=='/about'){
//         res.writeHead(201, {'Content-Type':'text/html'});
//         res.write('<h1>This is about Page..</h1>');
//         res.end();
//     }else if(req.url=='/contact'){
//         res.writeHead(201, {'Content-Type':'text/html'});
//         res.write('<h1>This is contact Page..</h1>');
//         res.end();
//     }else{
//         res.writeHead(404, {'Content-Type':'text/html'});
//         res.write('<p>404 ! This server is Filed....!!!</p>');
//         res.end();
//     }
// });


// server.listen(PORT, () => {
    // console.log(`server 💖 is creat at http://localhost:${PORT}`);
    // console.log(`server 💖 is creat at http://localhost:${PORT}`);
// });