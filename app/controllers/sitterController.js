var db = require("../models");
var user = db.user;

var exports = module.exports = {}

exports.getAllSitters = function(req, res) {
    user.findAll( 
        {
            attributes: ['id','firstname','lastname','handlesDogs','handlesCats','handlesBirds','handlesReptiles','email', 'lat', 'lng'],
            where: { isSitter: true } 
        })
        .then(function(results){
            res.json(results);
        });
}