const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCtrl.createNewNote = (req, res) => {
    res.send('new note');
};

notesCtrl.renderNotes = (req, res) => {
    res.send('render notes');
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render Edit form');
};

notesCtrl.updateNote = (req, res) => {
    res.send('update note');
};

notesCtrl.deleteNote = (req, res) => {
    res.send('delete note');
};

module.exports = notesCtrl;