const mongoose = require('mongoose');
const MediaAsset = require('./media-asset-schema');
const MaxOnScreen = require('./maximum-on-screen-schema');

const MediaSceneSchema = new mongoose.Schema({
    name: String,
    version: String,
    maximumOnScreen: MaxOnScreen,
    displayDuration: Number,
    displayInterval: Number,
    transitionDuration: Number,
    isLinear: String,
    isLinearOptions: String,
    forceFullSequencePlayback: Boolean,
    theme: Object,
    style: Object,
    scene: [MediaAsset]
});

module.exports = MediaSceneSchema;