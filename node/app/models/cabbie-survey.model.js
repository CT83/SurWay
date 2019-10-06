const mongoose = require('mongoose');

const CabbieSurveySchema = mongoose.Schema({
    working_hours: Integer,
    work_days_in_week: Integer,
    company: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('CabbieSurvey', CabbieSurveySchema);