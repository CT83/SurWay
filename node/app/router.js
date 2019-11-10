var express = require('express')
var router = express.Router()
const CabbieSurvey = require('./models/cabbie-survey.model.js');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/cabbie-surveys-summary', function (req, res) {
    CabbieSurvey.aggregate()
        .group({
            "_id": null,
            "avg_working_hours": { "$avg": "$working_hours" },
            "avg_work_days_in_week": { "$avg": "$work_days_in_week" },
        }).exec(function (err, result) {
            if (err) {
                return done(err);
            }
            companies = ['uber', 'ola', 'meru', 'carzonrent', 'savaaricarrentals', 'tabcab', 'megacabs', 'ntltaxi', 'mytaxiindia']
            company_breakdown = {};

            CabbieSurvey.find()
                .then(surveys => {
                    for (survey of surveys) {
                        for (company of companies) {
                            if (company_breakdown[company] == null) {
                                company_breakdown[company] = 0;
                            }
                            if (survey.company == company) {
                                company_breakdown[company]++;
                            }
                        }
                    }
                    result[0]['company_breakdown'] = company_breakdown;
                    res.send(result);
                });


        });
})


router.get('/cabbie-surveys', function (req, res) {

    CabbieSurvey.find()
        .then(surveys => {
            console.log("Fetched Surveys:" + surveys);
            res.send(surveys);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving surveys."
            });
        });
})

router.post('/cabbie-surveys', function (req, res) {
    // Validate request
    console.log(req.body)
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
    console.log("Created new survey!");
})

module.exports = router