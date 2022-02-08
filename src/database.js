const mongoose  = require('mongoose');

// const URI = 'mongodb://localhost:27017/notes_db';
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWD_DB}@cluster0.n4yjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(URI, config)
  .then(db => console.log('the database is connected'))
  .catch(err => console.log(err))