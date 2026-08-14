const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: [true, "username already exists"],
        required: [true, "username is required"]
    },
    email: {
        type: String,
        unique: [true, "username already exists"],
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("USER", userSchema);

module.exports = userModel;