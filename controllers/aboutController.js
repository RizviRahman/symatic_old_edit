function getAbout(req, res, next){
    res.render("about_n",{user: req.session.user});
}


module.exports = {
    getAbout
}