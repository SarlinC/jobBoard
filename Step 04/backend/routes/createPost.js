var express = require('express');
const _ = require('lodash');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

router.post('/', (req, res) => {
    connection.query(`INSERT INTO advertisements (titre, objet, contenu, date, numCompanies)
    VALUES ('${req.body.ad_title}', '${req.body.ad_object}', '${req.body.ad_contenu}', '${req.body.ad_date}')`, (err) => {
        if (err) {
            throw err;
        }
        else {
            res.send('AD ADDED');
        }
    });
});

module.exports = router;