const mongoose = require(`mongoose`);
mongoose.set(`useCreateIndex`, true);

const uri = `mongodb+srv://greg:DBkeeper777@cluster0-ixzca.mongodb.net/test?retryWrites=true`;

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
};

mongoose.connect(uri, options).then(
    () => {
        console.log(`Database connection established...`);
    },
    err => {
        console.log(`Error connecting database: `, err);
    }

);
