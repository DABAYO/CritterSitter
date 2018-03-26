const models = require("./models");

// Syncing our sequelize models 
models.sequelize.sync({ force: true })
    .then (() => 
        models.sequelize.close()
        .then(() => 
            console.log("Finished sync-ing the models")));

            var express = require("express");
var bodyParser = require("body-parser");

