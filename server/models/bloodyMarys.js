const mongoose = require('./db');
const Schema = mongoose.Schema;

// const PointSchema = new Schema({
//   type: {
//     type: String,
//     enum: ['Point'],
//     required: true
//   },
//   coordinates: {
//     type: [Number],
//     required: true
//   }
// });

const BloodyMarySchema = new Schema({ // TODO: implement date: date: {type: Date, default: Date.now()}
  location: String,
  rating: Number,
  price: Number,
  venue: Number,
  spice: Number,
  hangover: Number
});

module.exports = mongoose.model('BloodyMarys', BloodyMarySchema);