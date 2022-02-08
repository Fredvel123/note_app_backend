const router = require('express').Router();
const { addNewNotes, allNotes, removeNotes, getNotesByUser, getNoteById, updateNote } = require('../controllers/notes.ctl');
const { verifyToken } = require('../controllers/users');

router.post('/add', verifyToken, addNewNotes);
router.put('/update/:id', updateNote);
router.get('/all', allNotes);
router.get('/:id', getNoteById);
router.get('/user/:id', getNotesByUser);
router.delete('/remove/:id', removeNotes);


module.exports = router;