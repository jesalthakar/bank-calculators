const User = require("../models/User");
const { createToken, maxAgeLimit } = require("../utils/jwtUtils");


const createAdminAccount = async (username, password, confirmpassword) => {
    const existingAdmin = await User.findOne({ username, role: "admin" })
    if (!existingAdmin) {
        const admin = await User.create({ username, password, confirmpassword, role: "admin" })
        const token = createToken(admin._id);
        await admin.save();
        res.cookie('jwt', token, { maxAge: maxAgeLimit * 1000 });
        return admin._id;
    }

}
module.exports.createAdmin = async (req, res) => {
    const { username, password, confirmpassword } = req.body;
    try {
        const id = await createAdminAccount(username, password, confirmpassword)
        return res.status(200).json({ success: true, id: id });
    } catch (error) {
        console.error(error)
    }
}