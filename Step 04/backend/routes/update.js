var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

/* POST registering user. */


router.post('/', function(req, res) {
        connection.query(`SELECT * FROM advertisements WHERE numAdvertisements=${req.body.numAdvertisements}`, (err, result) => {
            if(err) {
                throw err;
            }
            res.send(result);
        });
});

module.exports = router;