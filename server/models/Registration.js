const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        trim: true
    },
    members: [{
        name: { type: String, required: true },
        dept: { type: String, required: true },
        year: { type: String, required: true },
        csiId: { type: String, required: true }
    }],
    contactPhone: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Registration', registrationSchema);
