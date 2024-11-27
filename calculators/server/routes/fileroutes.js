const express = require('express');
const router = express.Router();
const excelreaderController = require('../controllers/excelreaderController.js');

router.get("/bank-calculator/calculatordata", excelreaderController.getCalculatorData);

module.exports = router;