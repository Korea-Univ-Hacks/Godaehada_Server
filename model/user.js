const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true, lowercase: true,
    },
    password: { type: String, required: true, trim: true },
    nickname: String,
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('User', userSchema);
