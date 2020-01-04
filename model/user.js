const mongoose = require('mongoose');
const Portfolio = require('./portfolio');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true, lowercase: true,
    },
    password: { type: String, required: true, trim: true },
    nickname: String,
    thumbnail: { type: String, required: false },
    portfolios: [{ type: ObjectId, required: false, ref: Portfolio }],
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('User', userSchema);
