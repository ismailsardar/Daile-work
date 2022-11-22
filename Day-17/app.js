const { error } = require('console');
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const configs = { useUnifiedTopology: true };
const url = process.env.URL;
MongoClient.connect(url, configs, (error, client) => {
    if (error) {
        console.log('DataBase is not Connected..!');    
    } else {
        console.log('Data is Update...');
        // dataUpdate(client);
        // creatAcollection(client);
        deleteMyCollection(client);
    }
});

//Data update
function dataUpdate(client) {
    const myDataBase = client.db('firstDB');
    const myCollection = myDataBase.collection('users');

    const quary = {age: 38};
    const dataNew = {$set:{name:"Omore Faruk",age:100,location:"Makka"}};

    myCollection.updateOne(quary, dataNew, (error, result) => {
        console.log(result);
    });
}

//create a collections
function creatAcollection(client) {
    const myDataBase = client.db('firstDB');
    myDataBase.createCollection('oprator', (error, result) => {
        console.log(result);
    });
}

//Delete collection
function deleteMyCollection(client) {
    const myDataBase =  client.db('firstDB');
    myDataBase.dropCollection('oprator', (error, result) => {
        console.log(result);
    });
}