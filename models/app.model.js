const VersionModel = require('./version.model').schema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppModel = new Schema({
    name:String,
    author: String,
    version: [VersionModel]
});

module.exports = mongoose.model('App', AppModel);
