const Notes = require('../models/notes.models');

const addNewNotes = async (req, res) => {
  const note = await Notes(req.body);
  const newNote = await note.save();
  res.json(newNote)
}

const allNotes = async (req, res) => {
  const notes = await Notes.find();
  res.json(notes) 
}

const removeNotes = async (req, res) => {
  const {id} = req.params;
  const note = await Notes.findByIdAndDelete(id)
  res.json({
    message: 'the note was removed successfully',
    data: note
  })
}

const getNoteById = async (req, res) => {
  const {id} = req.params;
  const note = await Notes.findById(id);
  res.json(note)
}

const getNotesByUser = async (req, res) => {
  const {id} = req.params;
  const notes = await Notes.find( {user: id} )
  res.json(notes);
}


const updateNote = async (req, res) => {
  const {id} = req.params;
  const note = await Notes.findByIdAndUpdate(id, req.body);
  res.json({
    message: 'the note was created successfully',
    note: note
  })
}

module.exports = {
  addNewNotes,
  allNotes,
  removeNotes,
  getNotesByUser,
  getNoteById,
  updateNote
}