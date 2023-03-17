const express = require("express");
const router = express.Router();


router.get('/about',(req, res)=>{
    res.render("aboutFR",{user: req.session.user});
});

router.get('/contact',(req, res)=>{
    res.render("contactFR",{user: req.session.user});
});

router.get('/',(req, res)=>{
    res.render("indexFR",{user: req.session.user});
});

router.get('/civil',(req, res)=>{
    res.render("civilFR",{user: req.session.user});
});


router.get('/energy',(req, res)=>{
    res.render("energyFR",{user: req.session.user});
});

router.get('/environment',(req, res)=>{
    res.render("environmentFR",{user: req.session.user});
});

router.get('/it',(req, res)=>{
    res.render("itFR",{user: req.session.user});
});

router.get('/login',(req, res)=>{
    res.render("loginFR",{user: req.session.user});
});

module.exports = router;