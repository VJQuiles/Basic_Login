const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const verifyUser = require('../middleware/auth')

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.get('/profile', verifyUser, userController.getUser)

module.exports = router