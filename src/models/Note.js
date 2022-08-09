const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Note', NoteSchema);
