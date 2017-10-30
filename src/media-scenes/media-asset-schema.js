const mongoose = require('mongoose');
const VideoSchema = require('./../media-objects/video-media-object-schema');
const ImageSchema = require('./../media-objects/image-media-object-schema');
const AudioSchema = require('./../media-objects/audio-media-object-schema');

const MediaAsset = new mongoose.Schema({
    "type": String,
    "url": {
        type: String,
        required: false
    },
    "vmob": {
        type: VideoSchema,
        required: false
    },
    "imob": {
        type: ImageSchema,
        required: false
    },
    "amob": {
        type: AudioSchema,
        required: false
    }
});

module.exports = MediaAsset;