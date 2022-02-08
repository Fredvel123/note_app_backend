const router = require('express').Router();
const { addNewNotes, allNotes, removeNotes, getNotesByUser, getNoteById, updateNote } = require('../controllers/notes.ctl');
const { verifyToken } = require('../controllers/users');

router.post('/add', verifyToken, addNewNotes);
router.put('/update/:id', verifyToken, updateNote);
router.get('/all', verifyToken, allNotes);
router.get('/:id', verifyToken, getNoteById);
router.get('/user/:id', verifyToken, getNotesByUser);
router.delete('/remove/:id', verifyToken, removeNotes);


module.exports = router;