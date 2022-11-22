const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.URL;

const config = { useUnifiedTopology: true };

MongoClient.connect(url, config, (error, client) => {
    if(error){
        console.log('DataBase Not cconected...!');
    }else{
        console.log('Conected Successfule....');
        // insertData(client);
        // deleteDataOne(client);
        // deleteDataMany(client);
        // findOneData(client);
        // findAllData(client);
        // findDataProjection(client);
        // findDataQuarey(client);
        // findDataQuareyLimit(client);
        findDataQuareyBySort(client);
    }
});

//File insert DataBase
function insertData(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');
    let myData = {name:'ismile',age:23,location:'Dhaka'};
    myClaction.insertOne(myData, (error) => {
        if(error){
            console.log('Data instet Faile...!');
        }else{
            console.log('Data insert Success...');
        }
    });
}


//Data delete form DataBase
// function deleteDataOne(client) {
//     const myDataBase = client.db('firstDB');
//     const myClaction = myDataBase.collection('users');
//     const referData = {age: 55};

//     myClaction.deleteOne(referData, (error) => {
//         if(error){
//             console.log('DataBaet Failed...!');
//         }else{
//             console.log('Delete data is ocord...');
//         }
//     });

// }

//Dalete many data
function deleteDataMany(client){
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    myClaction.deleteMany((error, resultOdj) => {
        if (error) {
            console.log('Delete is faile..!');
        }else{
            console.log(resultOdj);
        }
    });

}

//fined
function findOneData(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    let findData = {};
    // let findData = {name: "jamal"};
    myClaction.findOne(findData, (error,resultD) => {
            console.log(resultD);
    });
}

function findAllData(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    // let findData = {name: "jamal"};

    myClaction.find().toArray((error,resultD) => {
            console.log(resultD);
    });
}
//Projection
// function findDataProjection(client) {
//     const myDataBase = client.db('firstDB');
//     const myClaction = myDataBase.collection('users');

//     // let findData = {};
//     // let findProjection = { projection:{name: "",age:""} };

//     myClaction.find({},{'name':1}).toArray((error,resultD) => {
//             console.log(resultD);
//     });
// }

//quyre
function findDataQuarey(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    let quarey = {name:'jamal',age:38};

    myClaction.find(quarey).toArray((error,resultD) => {
            console.log(resultD);
    });
}

//limit quarey
function findDataQuareyLimit(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    // let quarey = {name:'jamal',age:38};

    myClaction.find().limit(3).toArray((error,resultD) => {
            console.log(resultD);
    });
}

//Find Sort Node js mongoDB
function findDataQuareyBySort(client) {
    const myDataBase = client.db('firstDB');
    const myClaction = myDataBase.collection('users');

    let sortMet = {age:-1}//1:Asen -1:Desen
    myClaction.find().sort(sortMet).toArray((error,resultD) => {
            console.log(resultD);
    });
}




// const { MongoClient } = require('mongodb');
// require('dotenv').config();
// const url = process.env.URL;
// const client = new MongoClient(url); 
// client.connect()
// console.log('DataBase conected');