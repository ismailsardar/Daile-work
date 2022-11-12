let http = require('http');
let url = require('url');
let PORT = 5050;

let server = http.createServer((req,res) => {

    let mainUrl = 'http://nodejs.org/dist/latest-v19.x/docs/api/url.html';

    let sliceUrl = url.parse(mainUrl, true);
    let objU = sliceUrl.protocol;

    console.log(objU);
    // console.log(sliceUrl.pathname);

    // res.writeHead(201, {'Content-Type':'text/html'});
    // res.write(sliceUrl.path);
    // res.write(sliceUrl.hostname);
    // res.end();


});

server.listen(PORT, () => {
    console.log(`server is conect at http://localhost:${PORT}`);
});