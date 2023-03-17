function getIT(req, res, next){
    res.render("it",{user: req.session.user});
}


module.exports = {
    getIT
}