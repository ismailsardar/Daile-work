const http = require('http');
const fs = require('fs');

const PORT = 4040;


//exite file
// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         let result = fs.existsSync('does.txt');
//         if(result){
//             res.end('Fine is Exits...OK.');
//         }else{
//             res.end('File is Not Exites....');
//         }
//     }
// });

//fille Delete
// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         try {
//             fs.unlinkSync('syneNew.txt');
//             res.writeHead(200, {'Content-Type':'tetxt/html'});
//             res.write('Fill is Success full Delete..');
//             res.end();
//         } catch (error) {
//             res.writeHead(404, {'Content-Type':'text/html'});
//             res.write('File Delete Faill.....!!');
//             res.end();
//         }
//     }
// });


// const server = http.createServer((req, res) => {
//     if(req.url=='/'){

//         let error = fs.renameSync('does.txt', 'demoNew.txt');
//         if(error){
//             res.writeHead(404, {'Content-Type':'text/html'});
//             res.write('File is Fail...');
//             res.end();
//         }else{
//             res.writeHead(201, {'Content-Type':'text/html'});
//             res.write('File is rename is Success...');
//             res.end();
//         }
//     }
// });



//File Rename
const server = http.createServer((req, res) => {
    if(req.url == '/'){ 
        
        try {
            fs.renameSync('text.txt', 'syneNew.txt');
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write('File Rename Success Full...');
            res.end();
        } catch (error) {
            res.writeHead(404, {'Content-Type':'text/html'});
            res.write('Server is Faile..');
            res.end();
        }
        // console.log(error);
        // if(error == error){
        //     res.writeHead(404, {'Content-Type':'text/html'});
        //     res.write('Server is Faile..');
        //     res.end();
        // }else{
        //     res.writeHead(202, {'Content-Type':'text/html'});
        //     res.write('File Rename Success Full...');
        //     res.end();
        // }



        // fs.rename('syne.txt', 'demo2.txt', (error) => {
        //     if(error){
        //         res.writeHead(404, {'Content-Type':'text/html'});
        //         res.write('server is faile...');
        //         res.end();
        //     }else{
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.write('File is Rename Success Full...');
        //         res.end();
        //     }
        // });
    };
});





//file Crieat
// const server = http.createServer((req, res) => {
    // if(req.url == '/'){
        
        // let error = fs.writeFileSync('syne.txt', 'Server is Creating. This is Syen File..');
        // if(error){
        // res.writeHead(404, {'Content-Type':'text/html'});
        // res.write('Server is not fined');
        // res.end();
        // }else{
        //     res.writeHead(202, {'Content-Type':'text/html'});
        //     res.write('Server is Creat new File..');
        //     res.end();
        // }

        // fs.writeFile('does.txt', 'this is Demo...', (error) => {
        //     if(error){
        //         res.writeHead(404, {'Content-Type':'text/html'});
        //         res.write("404! server is Failed");
        //         res.end();
        //     }else{
        //         res.writeHead(201, {'Content-Type':'text/html'});
        //         res.write('File is Creat Success full');
        //         res.end();
        //     }
        // });
    // }
// });


//file read
// const server = http.createServer((req, res) => {

//     if(req.url == '/about'){
//         let myData = fs.readFileSync('index.html');
//         res.writeHead(201,{'Content-Type':'text/html'});
//         res.write(myData);
//     }



    // if(req.url == '/'){
    //     fs.readFile('index.html', (error, data) => {
    //         res.writeHead(201, {'Content-Type':'text/html'});
    //         res.write(data);
    //         res.end();
    //     });
    // }

// });

server.listen(PORT, () =>{
    console.log(`server rining at http://localhost:${PORT}`);
});