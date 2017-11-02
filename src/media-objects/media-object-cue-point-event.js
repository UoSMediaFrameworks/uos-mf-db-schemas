const mongoose = require('mongoose');

const MediaCuePointEvent = new mongoose.Schema({
    timeElapsed: Number,
    themes: {
        type: [String]
    }
});

module.exports = MediaCuePointEvent;

