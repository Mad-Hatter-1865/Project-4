const Game = require('../models/game');

module.exports = {
    createComment
};

function createComment(req, res) {
    Game.findById(req.params.id).then(function(game) {
        game.commentsect.push(req.body);
        game.save(function(game) {
            res.status(200).json(game);
        })
    })
}

