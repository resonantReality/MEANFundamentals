const MongoClient = require(`mongodb`).MongoClient;

var uri = `mongodb+srv://greg:DBkeeper777@cluster0-ixzca.mongodb.net/test?retryWrites=true`;

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
};

MongoClient.connect(uri, options)
.then((db) => {
    accountsDb = db;
    collections = accountsDb.db(`test`);
    console.log(`Successfully connected to MongoDB`);
})
.catch((err) => {
    console.log(err);
});
