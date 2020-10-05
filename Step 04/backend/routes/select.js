var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  let mysql = require('mysql');
  let connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'jobboard'
  });

  connection.connect(function(err) {
    if(err) throw err;
    console.log("CONNECTED");
  });

  // console.log(connection);

  connection.query('SELECT * FROM advertisements', (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

module.exports = router;
