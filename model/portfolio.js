const mongoose = require('mongoose');

const { Schema } = mongoose;

const portfolioSchema = new mongoose.Schema({
    category: { type: String, required: true },
    tag: { type: String, required: true },
    like: { type: Number, default: 0 },
    zzim: { type: Boolean, default: false },
    url: { type: String, required: true },
    commnets: { type: [Schema.Types.Mixed], required: true, default: [] },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('Photofolio', portfolioSchema);
