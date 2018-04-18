var sitterController = require('../controllers/sitterController');

module.exports = function(app, passport){
    app.get('/sitters', isLoggedIn , sitterController.getAllSitters );
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.status(403).send( { success: false, msg: 'Unauthorized' } );
}