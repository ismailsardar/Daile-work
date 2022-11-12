const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.URL;

const config = { useUnifiedTopology: true };

MongoClient.connect(url, config, (error, client) => {
    if(error){
        console.log('DataBase Not cconected...!');
    }else{
        console.log('Conected Successfule....');
        insertData(client);
    }
});

//File insert DataBase
function insertData(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    let myData = {name:'Faysal',age:55,location:'Dhaka'};

    myClaction.insertOne(myData, (error) => {
        if(error){
            console.log('Data instet Faile...!');
        }else{
            console.log('Data insert Success...');
        }
    });

}















// const { MongoClient } = require('mongodb');
// require('dotenv').config();
// const url = process.env.URL;
// const client = new MongoClient(url); 
// client.connect()
// console.log('DataBase conected');