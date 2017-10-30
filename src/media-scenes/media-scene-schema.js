const mongoose = require('mongoose');
const MediaAsset = require('./media-asset-schema');
const MaxOnScreen = require('./maximum-on-screen-schema');

const MediaSceneSchema = new mongoose.Schema({
    name: String,
    maximumOnScreen: MaxOnScreen,
    scene: [MediaAsset],
});

module.exports = MediaSceneSchema;