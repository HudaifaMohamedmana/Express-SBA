const express = require('express')
const app = express();
const posts = require('./routes/posts')
//=================--------------------------------==========================
app.set('view engine','ejs')

app.use('/',posts)



//==========================-------------------==============================

app.listen('3000',()=>{
    console.log('Server is now running 3000')
})