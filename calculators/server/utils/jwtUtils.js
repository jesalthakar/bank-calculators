const jwt = require("jsonwebtoken");

const maxAgeLimit = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'authtoken', {
        expiresIn: maxAgeLimit
    })

}

const verifyToken = (token) => {
    return jwt.verify(token, 'authtoken');


}

module.exports = { maxAgeLimit, createToken, verifyToken }