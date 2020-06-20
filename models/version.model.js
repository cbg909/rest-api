const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReleaseNoteModel = require('./release-note.model').schema;

const VersionModel = new Schema({
    version_num: String,
    release_date: String,
    url: String,
    release_notes: [ReleaseNoteModel]
});


module.exports = mongoose.model('Version', VersionModel);
