const router = require('express').Router();
const { addNewNotes, allNotes, removeNotes, getNotesByUser, getNoteById } = require('../controllers/notes.ctl');
const { verifyToken } = require('../controllers/users');

router.post('/add', addNewNotes);
router.get('/all', allNotes);
router.get('/:id', getNoteById);
router.get('/user/:id', getNotesByUser);
router.delete('/remove/:id', removeNotes);


module.exports = router;