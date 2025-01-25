const User = require("../models/User")

const createManagerAccount = async () => {
    try {
        const exsitingManger = await User.findOne({ role: "manager" });
        if (!exsitingManger) {
            const manager = new User({
                username: "Manager",
                password: "Manager1234",
                role: "manager"
            })
            await manager.save();
            console.log("Manager created successfully!");
        } else {
            console.log("Manager already exists.")
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { createManagerAccount }