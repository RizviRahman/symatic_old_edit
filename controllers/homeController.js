function getHome(req, res, next){
    console.log(req.session.user);
    res.render("index_n", { user: req.session.user });
}


module.exports = {
    getHome
}