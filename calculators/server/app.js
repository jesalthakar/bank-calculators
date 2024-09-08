const mongoose = require('mongoose');
const express = require('express');
const authroutes = require('./routes/authroutes.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Replace with your frontend domain/port
    credentials: true // Allow cookies to be sent with requests
}));


app.use((req, res, next) => {
    // Set the Access-Control-Allow-Origin header to allow requests from any origin
    res.header("Access-Control-Allow-Origin", "*");

    // Set the Access-Control-Allow-Methods header to allow specific HTTP methods
    res.header(
        "Access-Control-Allow-Methods",
        "PUT, OPTIONS, GET, POST, DELETE"
    );

    // Set the Access-Control-Allow-Headers header to allow specific HTTP headers
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
    );

    // Call the next middleware function in the stack
    next();
});

// Define your routes here
// For example:




//dataBase Connection


const uri = process.env.MONGODB_URI;
console.log(uri);
mongoose.connect(uri)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err))

//routes
app.use(authroutes)


