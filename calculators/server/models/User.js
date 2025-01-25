const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter an Username"],
        unique: true,
        lowercase: true,
        minlength: [3, "Username should be more than 3 characters"],
        maxlength: [20, "Username should be less than 20 characters"]

    },
    password: {
        type: String,
        required: [true, "Please enter Password"],
        minlength: [6, "Minimum password length is 6 characters"],
        maxlength: [20, "Maximum password length is 20 characters"],
    },
    role: {
        type: String,
        enum: ["manager", "admin", "user"],
        default: "user"
    }

})

userSchema.post("save", (doc, next) => {
    console.log("new user was created and saved", doc);
    next();
})

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw new Error("Password is incorrect");

    }
    throw new Error("Username is incorrect")

}
const User = mongoose.model('user', userSchema);

module.exports = User;