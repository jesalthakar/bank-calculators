const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post("/signup", authController.signup_post);
router.post("/validate", authController.validate);
router.post("/login", authController.login)
router.get("/logout", authController.logout);
module.exports = router;