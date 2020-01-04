const mongoose = require('mongoose');

const category = require('./category');

const portfolioSchema = new mongoose.Schema({
    category: { type: String, required: true, ref: category },
    tag: { type: String, required: true },
    like: { type: Number, default: 0 },
    url: { type: String, required: true },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('Photofolio', portfolioSchema);
