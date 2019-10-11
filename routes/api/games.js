const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

router.use(require('../../config/auth'));

router.get('/index', gamesCtrl.getAllGames);
router.get('/mygames', gamesCtrl.getMyGames);
router.post('/game', gamesCtrl.createGame);
router.delete('/game/:id', gamesCtrl.deleteGame);
router.get('/game/:id',  gamesCtrl.getOneGame);
router.put('/game/:id', gamesCtrl.editGame);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;
