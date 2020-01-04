const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    type: { type: String, required: true, unique: true },
    name: { type: String, required: true },
});

const categorySchema = new mongoose.Schema({
    type: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tags: { type: [tagSchema], default: [] },
});

module.exports = mongoose.model('Category', categorySchema);
