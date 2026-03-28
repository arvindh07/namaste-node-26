const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://arvindhdq_db_user:39NvslD3VdflaSPt@namaste-cluster.4zjrqee.mongodb.net/?appName=namaste-cluster";

const client = new MongoClient(uri);

const main = async () => {
    await client.connect();
    const db = client.db("hellodb");
    const usersDb = db.collection("users");

    // insert
    // const doc = { firstname: "Sanju", lastname: "Samson" };
    // await usersDb.insertOne(doc);

    // update
    // const query = { firstname: 'Sanju' };
    // const update = { $set: { lastname: 'SS' } };
    // const options = {};
    // await usersDb.updateOne(query, update, options);

    // delete
    const query = { firstname: "Sanju" };
    await usersDb.deleteOne(query);
    
    // read
    const users = await usersDb.find({}).toArray();


    return users;
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());