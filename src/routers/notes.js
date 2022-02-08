const router = require('express').Router();
const { addNewNotes, allNotes, removeNotes, getNotesByUser } = require('../controllers/notes.ctl');
const { verifyToken } = require('../controllers/users');

router.post('/add', addNewNotes);
router.get('/all', allNotes);
router.get('/user', verifyToken, getNotesByUser);
router.delete('/remove/:id', removeNotes);


module.exports = router;