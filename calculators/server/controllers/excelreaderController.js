const xlsx = require('xlsx');
const { transformedData } = require("../services/excelService");


module.exports.getCalculatorData = (req, res) => {
    try {
        const workbook = xlsx.readFile('../server/utils/Book1.xlsx');
        const calType = workbook.SheetNames.map((sheetName) => {
            const sheets = workbook.Sheets[sheetName]
            return transformedData(sheets, sheetName);

        })
        res.status(200).json({ message: 'File processed successfully', calType });


    } catch (error) {
        console.error(error)

    }

}