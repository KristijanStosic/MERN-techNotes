const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const authenticate = require('../middleware/authentication')

router.use(authenticate)

router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router