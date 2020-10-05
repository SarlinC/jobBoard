var express = require('express');
const bcrypt = require('bcrypt');

var router = express.Router();

/* POST registering user. */


router.post('/', function(req, res) {
    
    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'jobboard'
    });

    bcrypt.hash(req.body.pwd_string, 10).then(hash => {
        connection.query(`INSERT INTO people (nomPeople, prenomPeople, emailPeople, password, isRecruteur) VALUES ('${req.body.lastName}', '${req.body.firstName}', '${req.body.email_string}', '${hash}', '${req.body.is_recruteur}')`, (err, res) => {
            if(err) {
                throw err;
            }
        });
    });
    
});

module.exports = router;