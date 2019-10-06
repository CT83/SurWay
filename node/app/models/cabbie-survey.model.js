const mongoose = require('mongoose');

const CabbieSurveySchema = mongoose.Schema({
    working_hours: Number,
    work_days_in_week: Number,
    company: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('CabbieSurvey', CabbieSurveySchema);