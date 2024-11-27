const xlsx = require('xlsx');
//const sheets = file.SheetNames;


const readExcelFile = (sheets) => {
    try {
        const rows = xlsx.utils.sheet_to_json(sheets, { header: 1 }); // Convert to array format
        console.log(rows)
        return rows;

    } catch (error) {
        console.error("Error reading Excel sheet:", error);
    }
}


module.exports = { readExcelFile };




