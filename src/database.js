const mongoose  = require('mongoose');

const URI = 'mongodb://localhost:27017/notes_db';
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(URI, config)
  .then(db => console.log('the database is connected'))
  .catch(err => console.log(err))