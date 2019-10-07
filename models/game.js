var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsectSchema = new Schema({
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

var gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    reviewTitle: {
        type: String,
        required: true
    },
    commentsect: commentsectSchema
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);