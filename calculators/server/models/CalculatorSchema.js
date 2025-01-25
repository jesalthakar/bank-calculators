const mongoose = require("mongoose");


const calculatorSchema = new mongoose.Schema(
    {
        message: String,
        filename: String,
        calType: Array,
        uploadedAt: { type: Date, default: Date.now }
    },
    { strict: false }
)


module.exports = mongoose.model('Calculator', calculatorSchema)


