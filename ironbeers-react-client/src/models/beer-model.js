const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const beerSchema = new Schema({
  image: String,
  name: String,
  tagline: String,
  contributed_by: String,
});

const Beer = mongoose.model('Task', beerSchema);

module.exports = Beer;