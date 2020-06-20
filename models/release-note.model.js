const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReleaseNoteModel = new Schema({
        content: String,
        public_flag: Boolean,
        important_flag: Boolean
});


module.exports = mongoose.model('ReleaseNoteModel', ReleaseNoteModel);
