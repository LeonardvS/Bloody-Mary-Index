const mongoose = require('./db');
const Schema = mongoose.Schema;

const BloodyMarySchema = new Schema({ // TODO: implement date: date: {type: Date, default: Date.now()}
  latitude: Number,
  longitude: Number,
  location: String,
  rating: Number,
  price: Number,
  venue: Number,
  spice: Number,
  hangover: Number
});

module.exports = mongoose.model('BloodyMarys', BloodyMarySchema);