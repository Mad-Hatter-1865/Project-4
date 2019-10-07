const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

router.get('/index', gamesCtrl.getAllGames);
router.post('/game', gamesCtrl.createGame);
router.delete('/game/:id', gamesCtrl.deleteGame);
router.put('/game/:id', gamesCtrl.editGame);

module.exports = router;
