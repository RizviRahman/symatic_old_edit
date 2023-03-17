const express = require("express");
const { getEnergy } = require("../controllers/energyController");

const router = express.Router();


// login page
router.get("/", getEnergy);

module.exports = router;