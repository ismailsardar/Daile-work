const fs = require('fs');

const data1 = process.argv;
fs.writeFileSync(data1[2],data1[3]);



// argument vector(argv)
// How To Handle Command-line Arguments in Node.js Scripts
// console.log(process.argv[2])

// console.log(data1)
