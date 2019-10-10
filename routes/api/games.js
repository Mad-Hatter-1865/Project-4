const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

router.use(require('../../config/auth'));

router.get('/index', gamesCtrl.getAllGames);
router.get('/mygames', gamesCtrl.getMyGames);
router.post('/game', gamesCtrl.createGame);
router.delete('/game/:id', gamesCtrl.deleteGame);
router.get('/game/:id', gamesCtrl.getOneGame);
router.put('/game/:id', gamesCtrl.editGame);

module.exports = router;
