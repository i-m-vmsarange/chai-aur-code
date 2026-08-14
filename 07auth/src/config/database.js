const mongoose = require("mongoose")


function connectToDB() {

    mongoose.connect(process.env.MONGODB_URI).then((res) => {
        console.log("Connected to Database");
    })
}

module.exports = connectToDB;