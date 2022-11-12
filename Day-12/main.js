const MongodbClirnt = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb');

// Connection URL
const url = "mongodb+srv://ismailDB:3GvJ185DX53sthBH@democluster.s18ct6t.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(url);
// Database Name
// const dbName = 'firstDB';
// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('users');

//   //data insert
//   const insertResult = await collection.insertMany([{
//     name: 'mmongoDb',
//     age: 22,
//    }]);
//   console.log('Inserted documents =>', insertResult);


//   //Data gate
// //   const findResult = await collection.find({}).toArray();
// //   console.log('Found documents =>', findResult);

//   // the following code examples can be pasted here...

// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());








MongodbClirnt.connect(url, (error)=>{
    if(error){
        // console.log(error);
        console.log('Conection Fail....');
    }else{
        console.log('Node js File Conected..');
    }
});

