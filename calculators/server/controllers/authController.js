const User = require("../models/User");
const jwt = require("jsonwebtoken");

const errorHandler = (error) => {
    console.log(error.message, error.code);
    let errorObj = { username: "", password: "" };

    if (error.message.includes("user validation failed")) {
        console.log(Object.values(error.errors));
        Object.values(error.errors).forEach(({ properties }) => {
            errorObj[properties.path] = properties.message
        })
    } else if (error.code === 11000) {
        errorObj.username = "username is already taken"

    }
    return errorObj

}

module.exports.signup_post = async (req, res) => {
    const { username, password, confirmpassword } = req.body
    try {
        const user = await User.create({ username, password, confirmpassword })
        const token = createToken(user._id);
        res.cookie('jwt', token, { maxAge: maxAgeLimit * 1000 })
        res.status(200).json({ success: true, id: user._id })

    } catch (error) {
        const errormsg = errorHandler(error)
        res.status(400).json({ message: errormsg })
    }

}

module.exports.validate = async (req, res) => {
    const { token } = req.body;
    try {
        if (!token) {
            return res.status(200).json({ message: "Token is required" })
        }
        const user = verifyToken(token);
        if (!user) {
            return res.status(401).json({ message: "Invalid Token or expired Token" })
        }
        res.status(200).json({ message: "Valid Token" })


    } catch (error) {
        console.error(error);
    }
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.login(username, password);
        if (!user) {
            return res.status(401).json({ message: "Username or Passsword is wrong" })
        }

        const token = createToken(user._id);
        res.cookie('jwt', token, { maxAge: maxAgeLimit * 1000 })
        return res.status(200).json({ success: true, id: user._id, message: "Login Successful" });

    } catch (error) {
        console.error(error);
    }
}

module.exports.logout = async (req, res) => {
    try {
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ message: "Api failed" })
    }
}

const maxAgeLimit = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'authtoken', {
        expiresIn: maxAgeLimit
    })

}

const verifyToken = (token) => {
    return jwt.verify(token, 'authtoken');


}