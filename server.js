const express = require('express')
const app = express();
//=================--------------------------------==========================
//---------------------------------
app.set('view engine','ejs')
app.get(`/`,(req,res)=>{
    // res.send ('hello world')
    res.render(`rout`)
})
app.get(`/home`,(req,res)=>{
    res.render('home')
})


//==========================-------------------==============================

app.listen('3000',()=>{
    console.log('Server is now running 3000')
})