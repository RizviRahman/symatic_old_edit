function getPolicy(req, res, next){
    res.render("privacy",{user: req.session.user});
}


module.exports = {
    getPolicy
}