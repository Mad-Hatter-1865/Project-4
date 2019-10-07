const Game = require('../models/game');

module.exports = {
    getAllGames,
    getMyGames,
    createGame,
    deleteGame,
    editGame,
    show
};

function getAllGames(req, res) {
    Game.find({}).then(function(game) {
        res.status(200).json(game);
    });
}

function getMyGames(req,res) {
    Game.find({}).then(function(game) {
        res.status(200).json(game);
    });
}

function createGame(req, res) {
    Game.create(req.body).then(function(game) {
        res.status(201).json(game);
    });
}

function deleteGame(req, res) {
    Game.findByIdAndRemove(req.params.id).then(function(game) {
      res.status(200).json(game);
    });
}

function editGame(req, res) {
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(game) {
      res.status(200).json(game);
    });
  }

function show(req, res) {
    Game.findById(req.params.id).then(function(game) {
        res.status(200).json(game);
    });
}

