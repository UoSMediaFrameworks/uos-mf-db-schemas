const mongoose = require('mongoose');
const VideoSchema = require('./../media-objects/video-media-object-schema');
const ImageSchema = require('./../media-objects/image-media-object-schema');
const AudioSchema = require('./../media-objects/audio-media-object-schema');
const MediaCuePointEventSchema = require('./../media-objects/media-object-cue-point-event');

const MediaAsset = new mongoose.Schema({
    "type": String,
    "url": {
        type: String,
        required: false
    },
    "style": {
        type: Object,
        required: false
    },
    "autoreplay": {
        type: Number,
        required: false,
        default: 0
    },
    "tags": {
        type: String,
        required: false
    },
    "sequenceNumber": {
        type: Number,
        required: false
    },
    "cuePointEvents": {
        type: [MediaCuePointEventSchema],
        required: false
    },
    "text": {
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