const express = require('express')
const app = express();
//=================--------------------------------==========================
app.set('view engine','ejs')
//------------------------------------
const LaLigaData = require('./models/LaLiga')
const serieAData = require('./models/serieA')
const PremierLeagueData = require('./models/PremierLeague');
const Ligue1Date = require('./models/Ligue1')
const Bundesliga = require('./models/Bundesliga');

//---------------------------------

app.get('/serieA',(req,res)=>{
    res.send(serieAData)
})

app.get('/LaLiga',(req,res)=>{
    res.send(LaLigaData)
})

app.get('/Ligue1',(req,res)=>{
    res.send(Ligue1Date)
})

app.get('/Bundesliga',(req,res)=>{
    res.send(Bundesliga)
})

app.get('/PremierLeague',(req,res)=>{
    res.json(PremierLeagueData)
})
//-----------------------------------------------
app.get(`/`,(req,res)=>{
    res.render(`rout`)
})
app.get(`/home`,(req,res)=>{
    res.render('home')
})


//==========================-------------------==============================

app.listen('3000',()=>{
    console.log('Server is now running 3000')
})