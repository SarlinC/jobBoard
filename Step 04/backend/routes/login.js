var express = require('express');
var router = express.Router();

/* POST connecting user. */


router.post('/', function(req, res) {

    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'jobboard'
    });

    console.log('req : ' + req);

    connection.query(`SELECT * FROM people WHERE emailPeople='${req.body.email}'`, (err, res) => {
        if(err) {
            console.log('err : ' + err);
        }
        console.log('res : ' + res);
    });

});

module.exports = router;