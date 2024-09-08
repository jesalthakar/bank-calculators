const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post("/bank-calculator/signup", authController.signup_post);
router.post("/bank-calculator/validate", authController.validate);
router.post("/bank-calculator/login", authController.login)
router.get("/bank-calculator/logout", authController.logout);
module.exports = router;