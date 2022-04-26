const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    // user: { type: Schema.Types.ObjectId, ref: 'User' },
    activityName: { type: String, minlength: 1, maxlength: 100, required: true },
    description: { type: String, minlength: 1, maxlength: 1000, required: true },
    calories: { type: Number, min: 0, max: 10000, required: true },
    date: { type: Date, default: Date.now, required: true },
    duration: { type: Number, min: 0, max: 1440, required: true },
});

const RecordModel = mongoose.model('Record', recordSchema, 'records');
module.exports = RecordModel;