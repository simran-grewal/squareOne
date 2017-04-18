var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new  Schema({
  name: {
        type: String,
        required:true
      },
  image: {
          type: String,
          required: true,


  },
  price:
  {
      type: String,
      required: true
  },
  size:
  {
    type: String,
  },

  available:
  {
    type: Boolean
  },
  description:
  {
    type: String
  }
});

module.exports = mongoose.model('Product', schema);
