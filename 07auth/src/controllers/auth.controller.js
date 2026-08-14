const mongoose = require("mongoose");
const userModel = require("../models/user.model");


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
            username, email, password
        });

        res.status(200).json({
            message: "User created successfully",
            user: user
        })
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { registerUser }