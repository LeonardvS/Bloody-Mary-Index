const mongoose = require('./db');
const Schema = mongoose.Schema;

// TODO: implement date: date: {type: Date, default: Date.now()}

const BloodyMarySchema = new Schema({
  lat: {
    type: Number,
    default: 0
  },
  long: {
    type: Number,
    default: 0
  },
  rating: Number,
  price: Number,
  venue: Number,
  spice: Number,
  hangover: Number,
  address: String,
  name: String
});

module.exports = mongoose.model('BloodyMarys', BloodyMarySchema);