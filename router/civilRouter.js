const express = require("express");
const { getCivil } = require("../controllers/civilController");

const router = express.Router();


// login page
router.get("/", getCivil);

module.exports = router;