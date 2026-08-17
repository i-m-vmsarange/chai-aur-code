const mongoose = require("mongoose");
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {

    try {
        const { username, email, password } = req.body;

        const doesUserExists = await userModel.findOne({ username });

        if (doesUserExists) {
            res.status(409).json({
                message: "User already exists"
            })
        }
        const user = await userModel.create({
            username,
            email,
            password: crypto.createHash("sha256").update(password).digest("hex")
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.cookie("token", token, { httpOnly: true, secure: true });

        res.status(200).json({
            message: "User created successfully",
            user: user,
        })
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { registerUser }