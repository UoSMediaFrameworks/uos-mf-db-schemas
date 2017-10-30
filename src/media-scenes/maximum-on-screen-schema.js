const mongoose = require('mongoose');

const MaxOnScreen = new mongoose.Schema({
    "audio": Number,
    "image": Number,
    "video": Number,
    "text": Number
});

module.exports = MaxOnScreen;