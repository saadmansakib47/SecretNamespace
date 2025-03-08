const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profilePic: String,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", UserSchema);
