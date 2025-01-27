const mongoose = require('mongoose');
const express = require('express');
const fileUpload = require('express-fileupload')
const authroutes = require('./routes/authroutes.js');
const fileroutes = require("./routes/fileroutes.js");
const calculatorroutes = require("./routes/calculatorroutes.js");
const adminroutes = require("./routes/adminroutes.js");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { createManagerAccount } = require('./utils/createManager.js');
const { requireRole } = require('./middlewares/rolemiddleware.js');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Replace with your frontend domain/port
    credentials: true // Allow cookies to be sent with requests
}));


app.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    next();
});

// Define your routes here
// For example:


//app.listen(process.env.PORT || 5000)

//dataBase Connection


const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/MyDataBase"
mongoose.connect(uri)
    .then((result) => {
        app.listen(process.env.PORT || 5000)
        console.log(uri);

    })
    .catch((err) => console.log(err))
//routes
app.use(authroutes)
app.use(fileroutes)
app.use(calculatorroutes)
app.use(adminroutes)

app.use("/manager", requireRole(["manager", "admin"]), (req, res) => {
    res.send("Manager Dashboard");
})
createManagerAccount()




