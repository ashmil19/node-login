const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('static'));


app.get('/',(req,res)=>{
    res.redirect('/login');
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.get('/home', (req,res)=>{
    res.render('home');
})