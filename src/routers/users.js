const router = require('express').Router();
const { getAllUser, createNewUser, removeUserById, logInUser, verifyToken, getUserById } = require('../controllers/users');


router.get('/all', verifyToken, getAllUser);
router.get('/info', verifyToken, getUserById);
router.post('/signup', createNewUser);
router.post('/login', logInUser);
router.delete('/remove/:id', removeUserById);

module.exports = router;