var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

 name: {
    type: String,
    default: '',
    trim: true,
    required: 'name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,


  },
  price: {
    type: Number,
    trim: true,
    required: 'Price required'

  },
   quantity: {
    type: Number,
    trim: true,
    required: 'Quantity required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
