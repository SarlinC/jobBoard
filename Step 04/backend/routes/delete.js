var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function(req, res) {
  let mysql = require('mysql');
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobboard'
  });

  connection.connect();

  connection.query('SELECT * FROM advertisements', (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

module.exports = router;
