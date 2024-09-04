const express = require('express');
const router = express.Router();

const LaLigaData = require('../models/LaLiga');
const SerieAData = require('../models/serieA');
const PremierLeagueData = require('../models/PremierLeague');
const Ligue1Data = require('../models/Ligue1');
const BundesligaData = require('../models/Bundesliga');

function checkingPrams(post, res, param) {
    if (post.length === 0) {
        res.status(404).send({ Error: `404 '${param}' not found` });
    } else {
        res.status(200).send(post);
    }
}

// Serie A Routes
router.get('/serieA', (req, res) => {
    res.send(SerieAData);
});

router.get('/serieA/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = SerieAData.filter(post => post.id === id);
    checkingPrams(post, res, id);
});

router.get('/serieA/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const post = SerieAData.filter(post => post.name.toLowerCase() === name);
    checkingPrams(post, res, name);
});

// La Liga Routes
router.get('/LaLiga', (req, res) => {
    res.send(LaLigaData);
});

router.get('/LaLiga/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = LaLigaData.filter(post => post.id === id);
    checkingPrams(post, res, id);
});

router.get('/LaLiga/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const post = LaLigaData.filter(post => post.name.toLowerCase() === name);
    checkingPrams(post, res, name);
});

// Ligue 1 Routes
router.get('/Ligue1', (req, res) => {
    res.send(Ligue1Data);
});

router.get('/Ligue1/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = Ligue1Data.filter(post => post.id === id);
    checkingPrams(post, res, id);
});

router.get('/Ligue1/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const post = Ligue1Data.filter(post => post.name.toLowerCase() === name);
    checkingPrams(post, res, name);
});

// Bundesliga Routes
router.get('/Bundesliga', (req, res) => {
    res.send(BundesligaData);
});

router.get('/Bundesliga/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = BundesligaData.filter(post => post.id === id);
    checkingPrams(post, res, id);
});

router.get('/Bundesliga/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const post = BundesligaData.filter(post => post.name.toLowerCase() === name);
    checkingPrams(post, res, name);
});

// Premier League Routes
router.get('/PremierLeague', (req, res) => {
    res.send(PremierLeagueData);
});

router.get('/PremierLeague/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = PremierLeagueData.filter(post => post.id === id);
    checkingPrams(post, res, id);
});

router.get('/PremierLeague/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const post = PremierLeagueData.filter(post => post.name.toLowerCase() === name);
    checkingPrams(post, res, name);
});

// Home and Root Routes
router.get(`/`, (req, res) => {
    res.render(`rout`);
});

router.get(`/home`, (req, res) => {
    res.render('home');
});

module.exports = router;
