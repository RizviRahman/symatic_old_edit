function getContact(req, res, next){
    res.render("contact_n",{user: req.session.user});
}


module.exports = {
    getContact
}