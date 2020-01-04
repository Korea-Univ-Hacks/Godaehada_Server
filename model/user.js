const mongoose = require('mongoose');
const Portfolio = require('./portfolio');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true, lowercase: true,
    },
    password: { type: String, required: true, trim: true },
    nickname: String,
    description: { type: String, required: true},
    profileThumbnail: { type: String, required: false},
    thumbnail: { type: String, required: false },
    portfolios: [{ type: ObjectId, required: false, ref: Portfolio }],
    seller: { type: Boolean, default: false },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('User', userSchema);
