const mongoose = require('mongoose');

const photofolioSchema = new mongoose.Schema({
    category: { type: String, required: true },
    tag: { type: String, required: true },
    like: { type: Number, default: 0 },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('Photofolio', photofolioSchema);
