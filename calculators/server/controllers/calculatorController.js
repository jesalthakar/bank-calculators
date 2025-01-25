const CalculatorSchema = require("../models/CalculatorSchema");

module.exports.getCalculatorData = async (req, res) => {
    const type = req.query.calculator;
    console.log(type, "Requested Calculator Type");

    try {
        let data;
        let fieldsToFetch = { "calType.rangeinfo": 1, "calType.calText": 1 }
        if (type.toLowerCase() === "sip-calculator" || type.toLowerCase() === "lumpsum-calculator") {
            data = await CalculatorSchema.findOne({
                "calType.calText": { $in: ["sip-calculator", "lumpsum-calculator"] }
            }, fieldsToFetch);
        } else {
            data = await CalculatorSchema.findOne({
                "calType.calText": type.toLowerCase()
            }, fieldsToFetch)
        }
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return res.status(404).json({ message: `No data found for calculator type '${type}'` });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error Fetching Calculator Data:", error);
        res.status(500).json({ message: "Error Fetching Data", error });
    }
};
