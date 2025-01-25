const mongoose = require('mongoose');
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const authroutes = require('./routes/authroutes.js');
const fileroutes = require('./routes/fileroutes.js');
const calculatorroutes = require('./routes/calculatorroutes.js');
const adminroutes = require('./routes/adminroutes.js');
const { createManagerAccount } = require('./utils/createManager.js');
const { requireRole } = require('./middlewares/rolemiddleware.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Replace with your frontend domain/port
        credentials: true, // Allow cookies to be sent with requests
    })
);

app.use((req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'Content-Disposition');
    next();
});

// Routes
app.use(authroutes);
app.use(fileroutes);
app.use(calculatorroutes);
app.use(adminroutes);

app.use('/manager', requireRole(['manager', 'admin']), (req, res) => {
    res.send('Manager Dashboard');
});

// Create the manager account on server startup
createManagerAccount();

// Export the serverless handler
module.exports = async (req, res) => {
    // Ensure the database connection is established
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/MyDataBase';
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Database connection error:', error);
            return res.status(500).send('Internal Server Error');
        }
    }

    // Pass the request to Express app
    app(req, res);
};
