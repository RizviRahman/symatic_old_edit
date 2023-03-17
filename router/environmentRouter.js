const express = require("express");
const { getEnvironment } = require("../controllers/environmentController");

const router = express.Router();


// login page
router.get("/", getEnvironment);

module.exports = router;