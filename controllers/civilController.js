function getCivil(req, res, next){
    res.render("civil",{user: req.session.user});
}


module.exports = {
    getCivil
}