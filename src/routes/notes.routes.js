const { Router } = require('express');
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require('../controllers/notes.controllers');

const { isAuthenticated } = require('../helpers/auth');

// New note
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, createNewNote);

// Get All note
router.get('/notes', isAuthenticated, renderNotes);

// Edit Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit/:id', isAuthenticated, updateNote);

// Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;
