const xlsx = require('xlsx');
const { transformedData, formatDataForExcel } = require("../services/excelService");
const CalculatorSchema = require('../models/CalculatorSchema');
const { writeExcelFile } = require('../utils/excelreader');
const { get } = require('../routes/authroutes');


module.exports.getExcel = async (req, res) => {
    console.log(req.files.file)

    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const uploadedFile = req.files.file
        const workbook = xlsx.read(uploadedFile.data);
        const calType = workbook.SheetNames.map((sheetName) => {
            const sheets = workbook.Sheets[sheetName]
            console.log(sheetName)
            return transformedData(sheets, sheetName.split(" ").join("-"));
        })

        const newCalculator = new CalculatorSchema({
            message: "File uploaded successfully",
            calType,
            filename: req.files.file.name
        })

        await newCalculator.save();
        res.status(200).json({ message: 'File processed successfully' });


    } catch (error) {
        console.error(error)

    }

}

module.exports.getJson = async (req, res) => {
    try {
        const { inputFileName } = req.body;
        let getJsonData;
        console.log(inputFileName);
        if (inputFileName.split(".")[0].toLowerCase() === "sip-calculator" || inputFileName.split(".")[0].toLowerCase() === "lumpsum-calculator") {
            getJsonData = await CalculatorSchema.findOne({
                "calType.calText": { $in: ["sip-calculator", "lumpsum-calculator"] }
            })
        } else {
            getJsonData = await CalculatorSchema.findOne({
                "calType.calText": inputFileName.split(".")[0].toLowerCase()
            })
        }
        console.log(getJsonData)

        const jsonData = getJsonData.calType.find((item) => {
            return item.calText === inputFileName.split(".")[0].toLowerCase()
        }).rangeinfo

        const excelData = formatDataForExcel(jsonData);
        console.log(excelData);
        const fileBuffer = writeExcelFile(excelData, getJsonData);
        console.log(fileBuffer);
        res.header("Content-Disposition", `attachment; filename = ${getJsonData.filename}`);
        res.header("content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.send(fileBuffer);

    } catch (error) {
        console.error(error)
    }
}