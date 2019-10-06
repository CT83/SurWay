module.exports = (app) => {
    const cabbieSurveys = require('../controllers/cabbie-survey.controller.js');

    // Create a new Survey
    app.post('/cabbie-surveys', cabbieSurveys.create);

    // Retrieve all Notes
    app.get('/cabbie-surveys', cabbieSurveyss.findAll);

    // Retrieve a single Survey with id
    app.get('/cabbie-surveys/:id', cabbieSurveys.findOne);

    // Update a Survey with id
    app.put('/cabbie-surveys/:id', cabbieSurveys.update);

    // Delete a Survey with id
    app.delete('/cabbie-surveys/:id', cabbieSurveys.delete);
}