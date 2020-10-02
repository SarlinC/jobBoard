var express = require('express');
var router = express.Router();

/* GET users listing. */


router.post('/', function(req, res) {
    
    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'jobboard'
    });

    connection.connect();

    console.log(req);

    connection.query(`INSERT INTO people (nomPeople, prenomPeople, emailPeople, password, isRecruteur)`
    + ` VALUES ('${req.body.lastName}', '${req.body.firstName}', '${req.body.email_string}', '${req.body.pwd_string}', '${req.body.is_recruteur}')`, (err, res) => {
        if(err) {
            throw err;
        } 
    });
    
});

module.exports = router;