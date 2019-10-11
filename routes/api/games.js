const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

router.use(require('../../config/auth'));

router.get('/index',checkAuth, gamesCtrl.getAllGames);
router.get('/mygames',checkAuth, gamesCtrl.getMyGames);
router.post('/game', checkAuth, gamesCtrl.createGame);
router.delete('/game/:id', checkAuth, gamesCtrl.deleteGame);
router.get('/game/:id', checkAuth, gamesCtrl.getOneGame);
router.put('/game/:id', checkAuth, gamesCtrl.editGame);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;
