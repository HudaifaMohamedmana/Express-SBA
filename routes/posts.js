const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/postControllers');

// Home and Root Routes
router.get(`/`, (req, res) => {
    res.render(`rout`);
});
router.get(`/home`, (req, res) => {
    res.render('home');
});
router.get('/:League', postControllers.getLeague);

router.get('/:league/id/:id', postControllers.getTeamByID);

router.get('/:league/name/:name', postControllers.getTeamByname);
module.exports = router;
