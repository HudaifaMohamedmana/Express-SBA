const express = require('express')
const app = express();
//=================--------------------------------==========================
app.set('view engine','ejs')
//------------------------------------
const LaLigaData = require('./models/LaLiga')
const serieAData = require('./models/serieA')
const PremierLeagueData = require('./models/PremierLeague');
const Ligue1Data = require('./models/Ligue1')
const BundesligaData = require('./models/Bundesliga');
const { name } = require('ejs');

//---------------------------------

app.get('/serieA',(req,res)=>{
    res.send(serieAData)
})

app.get('/serieA/id/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(serieAData.filter((post)=>post.id === id));
})
app.get('/serieA/name/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    res.send(serieAData.filter((post)=>post.name.toLowerCase() === name));
})
//-----------------------------------------
app.get('/LaLiga',(req,res)=>{
    res.send(LaLigaData)
})
app.get('/LaLiga/id/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(LaLigaData.filter((post)=>post.id === id));
})
app.get('/LaLiga/name/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    res.send(LaLigaData.filter((post)=>post.name.toLowerCase() === name));
})
//---------------------------------------
app.get('/Ligue1',(req,res)=>{
    res.send(Ligue1Data)
})
app.get('/Ligue1/id/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(Ligue1Data.filter((post)=>post.id === id));
})
app.get('/Ligue1/name/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    res.send(Ligue1Data.filter((post)=>post.name.toLowerCase() === name));
})
//---------------------------------------

app.get('/Bundesliga',(req,res)=>{
    res.send(BundesligaData)
})
app.get('/Bundesliga/id/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(BundesligaData.filter((post)=>post.id === id));
})
app.get('/Bundesliga/name/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    res.send(BundesligaData.filter((post)=>post.name.toLowerCase() === name));
})
//---------------------------------------
app.get('/PremierLeague',(req,res)=>{
    res.json(PremierLeagueData)
})
app.get('/PremierLeague/id/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    res.send(PremierLeagueData.filter((post)=>post.id === id));
})
app.get('/PremierLeague/name/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    res.send(PremierLeagueData.filter((post)=>post.name.toLowerCase() === name));
})
//-----------------------------------------------




//================================================================================================
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