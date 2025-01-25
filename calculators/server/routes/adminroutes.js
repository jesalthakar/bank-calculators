const express = require("express");
const { isManagerMiddleWare } = require("../middlewares/rolemiddleware");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.post("/bank-calculator/createadmin", adminController.createAdmin)

module.exports = router;
