const CabbieSurvey = require('../models/cabbie-survey.model.js');

// Create and Save a new Survey
exports.create = (req, res) => {
    // Validate request
    if (!req.body.working_hours || !req.body.work_days_in_week || !req.body.company) {
        return res.status(400).send({
            message: "Survey content can not be empty"
        });
    }

    // Create a Survey
    const survey = new CabbieSurvey({
        working_hours: req.body.working_hours || 8,
        work_days_in_week: req.body.work_days_in_week || 5,
        company: req.body.company || 'other'
    });

    // Save Survey in the database
    survey.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Survey."
            });
        });
};

// Retrieve and return all surveys from the database.
exports.findAll = (req, res) => {
    CabbieSurvey.find()
        .then(surveys => {
            res.send(surveys);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving surveys."
            });
        });

};

// Find a single survey with a id
exports.findOne = (req, res) => {

    CabbieSurvey.findById(req.params.id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "CabbieSurvey not found with id " + req.params.id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "CabbieSurvey not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.id
            });
        });

};
