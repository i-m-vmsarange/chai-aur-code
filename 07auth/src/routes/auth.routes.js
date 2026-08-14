const express = require("express")

const authRouter = express.Router();

const { registerUser } = require("../controllers/auth.controller")

/**
 *   POST api/auth/register
 */
authRouter.post("/register", registerUser);



module.exports = authRouter;