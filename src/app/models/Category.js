const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Category = new Schema({
  name: {type: String},
  des: {type: String},
  slug: {type: String, slug:'name', unique: true}

});

module.exports = mongoose.model('Category', Category);