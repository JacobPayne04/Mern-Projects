
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3,"{PATH} must have at least 3 chracters"]
    },
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author