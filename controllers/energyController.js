function getEnergy(req, res, next){
    res.render("energy",{user: req.session.user});
}


module.exports = {
    getEnergy
}