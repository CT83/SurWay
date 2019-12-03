const CabbieSurvey = require('../models/cabbie-survey.model.js');


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
