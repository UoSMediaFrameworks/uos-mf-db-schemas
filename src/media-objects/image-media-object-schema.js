const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    path: String,
    sceneId: String,
    image: Object,
    thumbnail: Object,
    resized: Object
});

module.exports = ImageSchema;