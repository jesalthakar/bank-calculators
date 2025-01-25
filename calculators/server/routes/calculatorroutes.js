const express = require('express');
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/bank-calculator/getcalculatordata", calculatorController.getCalculatorData);

module.exports = router