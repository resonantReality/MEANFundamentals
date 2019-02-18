//	Load mongoose module
const mongoose = require(`mongoose`);



//	Declare schema and assign Schema class 
const schema = mongoose.Schema;

//	Create Schema Instance and add schema properties(assuming we're creating for a simple blog)
const blogSchema = new schema({
  title: {
    type: String,
    required: true
  },
  body: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});


//	Make model exportable model
module.exports = mongoose.model(`ArticleModel`, blogSchema);
