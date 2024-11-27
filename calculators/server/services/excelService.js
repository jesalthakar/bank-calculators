const { readExcelFile } = require("../utils/excelreader.js");


const transformedData = (sheets, sheetName) => {
    console.log(sheets)
    const rows = readExcelFile(sheets)
    // Extract headers and data rows
    const headers = rows[0].slice(1); // Skip the first column
    console.log(headers);
    const dataRows = rows.slice(1); // Skip header row
    console.log(dataRows);

    // Row labels (first column) and dynamic column mapping
    const rowLabels = dataRows.map((row) => row[0]); // Extract first column (row labels)
    const rangeinfo = headers.map((header, colIndex) => {
        // Create dynamic slider object
        const sliderObj = { sliderType: header };
        //console.log(sliderObj)
        rowLabels.forEach((label, rowIndex) => {
            const value = dataRows[rowIndex][colIndex + 1]; // Get the value in the current cell
            sliderObj[label?.toLowerCase() || ""] = value !== undefined ? value : null; // Assign null if value is missing
        });
        return sliderObj;
    });

    return {
        calText: sheetName,
        rangeinfo,
    };

}

module.exports = { transformedData }