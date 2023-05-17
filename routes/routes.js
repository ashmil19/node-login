const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    if(req.session.authorized){
        res.redirect('/home');
    }else{
        res.render('login',{message: ""});
    }
})

// router.get('/login', (req, res)=>{
//     res.render('login',{message: ""});
// })

router.get('/home', (req,res)=>{
    if(req.session.authorized){
        res.render('home');
    }else{
        res.redirect('/');
    }
})

router.post('/login', (req,res)=>{
    let user = {
        username : "ashmil",
        password : "123456",
    }

    if(req.body.username == user.username && req.body.password == user.password){
        req.session.user = user;
        req.session.authorized = true;
        res.redirect('/home');
    }else{
        res.render('login',{message:"Username and password is incorrect"});
    }

    console.log(req.body);
})


router.get('/logout', (req,res)=>{
    req.session.destroy();

    res.clearCookie('user');
    res.redirect('/');
})

module.exports = router;