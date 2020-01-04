const mongoose = require('mongoose');
const Photofolio = require('./photofolio');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true, lowercase: true,
    },
    password: { type: String, required: true, trim: true },
    nickname: String,
    category: [{ type: ObjectId, required: false, ref: Photofolio }],
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('User', userSchema);
