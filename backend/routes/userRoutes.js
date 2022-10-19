const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const authenticate = require('../middleware/authentication')

router.use(authenticate)

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router