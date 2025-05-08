const express = require('express');
const router = express.Router()
const {createUser, getUsers, deleteUser} = require('../controllers/user.controller')


router.get('/',getUsers);
router.post('/',createUser);
router.delete('/:userId',deleteUser)

module.exports = router