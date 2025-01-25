const xlsx = require('xlsx');
//const sheets = file.SheetNames;


const readExcelFile = (sheets) => {
    try {
        const rows = xlsx.utils.sheet_to_json(sheets, { header: 1 }); // Convert to array format
        return rows;
    } catch (error) {
        console.error("Error reading Excel sheet:", error);
    }
}

const writeExcelFile = (jsonData, sheetData) => {
    try {
        const workbook = xlsx.utils.book_new();

        sheetData.calType.forEach((eachSheet) => {
            // Filter data for the current sheet
            const filteredData = jsonData.formattedData;
            // Prepare worksheet with headers
            const worksheet = xlsx.utils.json_to_sheet(filteredData, {
                header: jsonData.headers,
            });

            xlsx.utils.book_append_sheet(workbook, worksheet, eachSheet.calText);
        });

        const excelBuffer = xlsx.write(workbook, {
            type: 'buffer',
            bookType: 'xlsx',
        });
        return excelBuffer;

    } catch (error) {
        console.error('Error writing Excel file:', error);
    }
};



module.exports = { readExcelFile, writeExcelFile };




