const mongoose = require('mongoose');

const AudioSchema = new mongoose.Schema({
    path: String,
    hasTranscoded: { type: Boolean, default: false},

    description: String,

    uploadedTimestamp: { type: String, default: "" },
    transcodedTimestamp:  { type: String, default: "" },
    transcodingStartedTimestamp: { type: String, default: "" },

    audio: Object
});

module.exports = AudioSchema;