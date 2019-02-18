// load mongoose module
const mongoose = require(`mongoose`);

const schema = mongoose.Schema;

// create schema and add properties for a simple blog
const blogSchema = new schema({

    title: {
        type: String,
        require: true
    },
    body: String,
    tag: {
        type: String,
        enum: [`POLITICS`, `ECONOMY`, `EDUCATION`]
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// make model exportable
module.exports = mongoose.model(`articleModel`, blogSchema);