const express = require('express');
const router = express.Router();
const fileformatController = require('../controllers/fileformatController.js');

router.post("/bank-calculator/uploadExcel", fileformatController.getExcel);
router.post("/bank-calculator/downloadexcel", fileformatController.getJson);

module.exports = router;