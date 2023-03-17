function getEnvironment(req, res, next){
    res.render("environment",{user: req.session.user});
}


module.exports = {
    getEnvironment
}