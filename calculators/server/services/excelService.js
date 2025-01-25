const { readExcelFile } = require("../utils/excelreader.js");


const transformedData = (sheets, sheetName) => {
    const rows = readExcelFile(sheets)
    // Extract headers and data rows
    const headers = rows[0].slice(1); // Skip the first column
    const dataRows = rows.slice(1); // Skip header row


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

const formatDataForExcel = (data) => {
    const formattedData = [];
    const headers = ['', ...new Set(data.map((item) => item.sliderType))];
    const uniqueKeys = Object.keys(data[0]).filter((key) => key !== 'sliderType');

    // Iterate over each key (property) of the data
    uniqueKeys.forEach((key) => {
        const row = { '': key }; // Initialize row with 'title' column
        data.forEach((item) => {
            row[item.sliderType] = item[key] || ""; // Add each sliderType column
        });
        formattedData.push(row);
    });

    return { headers, formattedData };
};


module.exports = { transformedData, formatDataForExcel }