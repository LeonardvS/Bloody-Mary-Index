const mongoose = require('./db');
const Schema = mongoose.Schema;

const BloodyMarySchema = new Schema({ // TODO: implement date: date: {type: Date, default: Date.now()}
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
  address: String
});

module.exports = mongoose.model('BloodyMarys', BloodyMarySchema);