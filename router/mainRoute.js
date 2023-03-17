const express = require("express");



const isAdmin = require("../middleware/isAdmin");

const homeRouter = require("../router/homeRouter");
const aboutRouter = require("../router/aboutRouter");
const civilRouter = require("../router/civilRouter");
const energyRouter = require("../router/energyRouter");
const environmentRouter = require("../router/environmentRouter");
const itRouter = require("../router/itRouter");
// const servicesRouter = require("../router/servicesRouter");
const contactRouter = require("../router/contactRouter");
const jobRouter = require("../router/jobRouter");
const loginRouter = require("../router/loginRouter");
const signupRouter = require("../router/signupRouter");
const adminRouter = require("../router/adminRouter");
const policyRouter = require("../router/policyRouter");
const frRouter = require("../router/frRouter");


const router = express.Router();

router.use('/about', aboutRouter);

router.use('/civil', civilRouter);
router.use('/energy', energyRouter);
router.use('/environment', environmentRouter);
router.use('/it', itRouter);
// router.use('/services', servicesRouter);
router.use('/job-offers', jobRouter);
router.use('/contact', contactRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/admin-path', isAdmin, adminRouter);
router.use('/policy', policyRouter);

router.use('/fr', frRouter);

router.use('/', homeRouter);

module.exports = router;