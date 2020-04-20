const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bloodyMarys_db', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('*** database connected ***'));

module.exports = mongoose;