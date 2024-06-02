const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    totalGroupExpenses: {
        type: Number,
        required: true
    }
});

const splitGroup = mongoose.model('splitGroup', groupSchema);
module.exports = splitGroup;