const mongoose = require('mongoose');

const { Schema } = mongoose;

const portfolioSchema = new mongoose.Schema({
    category: { type: String, required: true },
    tag: { type: String, required: true },
    like: { type: Number, required: false, default: 0 },
    zzim: { type: Boolean, required: false, default: false },
    url: { type: String, required: true },
    commnets: { type: [Schema.Types.Mixed], required: false, default: [] },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('Portfolio', portfolioSchema);
