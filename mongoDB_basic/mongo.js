const { MongoClient } = require("mongodb");
require('dotenv').config();
const URL = process.env.ATLASDB;

// console.log(URL);
const client = new MongoClient(URL);
// console.log('Data Base is conected')

async function crudDB() {
    try {
        const myCollection = client.db('firstDB');
        const myDatabase = myCollection.collection('users');
        //insertone
        // const dos = {
        //     titel: 'insertOne',
        //     descrive: 'Hay!  there how are you..'
        // }

        //multepoll data insert
        // const dos = [
        //     { name: "Dola", healthy: 'Good' },
        //     { name: "Hasan", healthy: 'letel Bit' },
        //     { name: "Kodom Alli", healthy: 'Welets' }
        //   ];
        // const options = {ordered: true}  

        //fined Data
        // const query = {location: "Dhaka"};
        // const query = {};

        //update Data
        // const filter = {location: "Dhaka"};
        // const options = { upsert: true };
        // const updateDoc = {$set: {country: 'Bangladesh'}};

        //Delete Data
        // const filter = {name: "Hasan"};
        const filter = {location: "Dhaka"};

        // const result = await myDatabase.insertOne(dos);
        // const result = await myDatabase.insertMany(dos,options);
        // const result = await myDatabase.findOne(query);
        // const cursor = await myDatabase.find(query);
        // const result = await myDatabase.updateOne(filter,updateDoc,options);
        // const result = await myDatabase.updateMany(filter,updateDoc);
        // const result = await myDatabase.deleteOne(filter);
        // const result = await myDatabase.deleteMany(filter);

        // if (result) {
        //     console.log(`Document was inserted`);
        // }
        // console.log(result);

        //fiend meny Data
        // const result = await cursor.toArray();
        // result.forEach(ele => {
        //     console.log(ele);
        // });

        //update Data
        // console.log(
        //     `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        //   );
        // console.log(`Updated ${result.modifiedCount} documents`);

        //Delete Data
        // if (result.deletedCount === 1) {
        //     console.log("Successfully deleted one document.");
        //   } else {
        //     console.log("No documents matched the query. Deleted 0 documents.");
        //   }
        console.log("Deleted " + result.deletedCount + " documents");

    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
    
}
crudDB();
