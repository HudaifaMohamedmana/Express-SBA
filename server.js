const express = require('express')
const app = express();
//=================--------------------------------==========================
const LaLigaData = require('./models/LaLiga')
const serieAData = require('./models/serieA')
const PremierLeagueData = require('./models/PremierLeague');

//---------------------------------
app.set('view engine','ejs')
//------------------------------------
app.get('/serieA',(req,res)=>{
    res.send(serieAData)
})
// ----------> [GET] => Retrieve Data from a server
app.get('/LaLiga',(req,res)=>{
    res.render(laLigaTeams)
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