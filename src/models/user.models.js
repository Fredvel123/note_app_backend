const { Schema, model } = require('mongoose');


const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = model('users', userSchema);