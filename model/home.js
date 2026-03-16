const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const HomeSchema = mongoose.model("home", homeSchema);
module.exports = HomeSchema;