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


/* app.use((req, res, next) => {
   
    res.header("Access-Control-Allow-Origin", "*");

 
    res.header(
        "Access-Control-Allow-Methods",
        "PUT, OPTIONS, GET, POST, DELETE"
    );

  
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
    );

    
    next();
}); */

// Define your routes here
// For example:


//app.listen(process.env.PORT || 5000)

//dataBase Connection




const uri = "mongodb://localhost:27017/MyDataBase"
console.log(uri);
mongoose.connect(uri)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err))
//routes
app.use(authroutes)


