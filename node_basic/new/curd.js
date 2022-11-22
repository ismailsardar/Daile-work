const fs = require('fs');
const path = require('path')
const dirName = path.join(__dirname);
// console.log(dirName);


// Asynchronous function

// fs.writeFile(`${dirName}/galo.txt`,'This galo file sink..',(err)=>{if(!err)console.log('File is created')});

// fs.appendFile(`${dirName}/galo.txt`,' Palin is the very first veicals',(err)=> {if(!err)console.log('File is Update')});

// fs.readFile(`${dirName}/galo.txt`,'utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.unlink(`${dirName}/galo.txt`,(err)=>{if(!err)console.log('Delete file..');});