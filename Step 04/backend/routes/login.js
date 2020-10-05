var express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');

var router = express.Router();

/* POST connecting user. */


router.post('/', function (req, res) {

    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        port: '8889',
        user: 'root',
        password: 'root',
        database: 'jobboard'
    });

    connection.connect();

    connection.query(`SELECT * FROM people WHERE emailPeople='${req.body.email}'`, (err, result) => {
        console.log('THIS IS THE RESULT',result);
        if (_.isEmpty(result) || err) {     //vérifie si result est un objet vide
            res.send(false);
        }
        else {                              //sinon lance la comparaison
            bcrypt.compare(req.body.password, result[0].password).then(valid => {
                if (valid) {
                    res.send(true);
                }
                else {
                    res.send(false);
                }
            }).catch(err => {
                throw err;
            });
        }
    });
});

module.exports = router;