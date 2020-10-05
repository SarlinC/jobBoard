var express = require('express');
const bcrypt = require('bcrypt');

var router = express.Router();

/* POST connecting user. */


router.post('/', function (req, res) {

    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'jobboard'
    });

    connection.connect();

    connection.query(`SELECT * FROM people WHERE emailPeople='${req.body.email}'`, (err, result) => {
        if (err) {
            res.send('Erreur !');
        }
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
    });
});

module.exports = router;