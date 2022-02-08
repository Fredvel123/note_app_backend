const { Schema, model } = require('mongoose');


const notesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    unique: false
  },
  user: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = model('notes', notesSchema);