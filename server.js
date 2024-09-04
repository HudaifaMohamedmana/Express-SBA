const express = require('express')
const app = express();
const posts = require('./routes/posts')
//=================--------------------------------==========================
app.set('view engine','ejs')
//-----------------------------   middleware    -------------------------------------
app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('bad reqest, Something went wrong!'); 
    next();
});
// --------------------------------- routes ------------------------------

app.use('/',posts)

//==========================-------------------==============================

app.listen('3000',()=>{
    console.log('Server is now running 3000')
})