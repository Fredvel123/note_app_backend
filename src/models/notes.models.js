const { mongoose, Schema, model } = require('mongoose');


const notesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  user: {
    type: String 
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = model('notes', notesSchema);