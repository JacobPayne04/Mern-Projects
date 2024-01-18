const mongoose = require('mongoose');
 
const managerSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price : {
        type: Number
    },
    description : {
        type: String
    }
}, { timestamps: true });
 
const manager = mongoose.model('manager', managerSchema);
 
module.exports = manager;
