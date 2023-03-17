const express = require("express");
const { getIT } = require("../controllers/itController");

const router = express.Router();


// login page
router.get("/", getIT);

module.exports = router;