
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Login = new Schema({
  name: {type: String},
  password: {type: String},
  slug: {type: String, slug:'name', unique: true}

});

module.exports = mongoose.model('Login', Login);