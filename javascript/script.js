let mysql = require('mysql');
let cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

cnx.connect(function(err) {
    if (err) {
        throw err;
    }

    cnx.query('SELECT * FROM advertissements;', function (err, result) {
        if (err) {
            throw err;
        }

        console.log('=======================');
        console.log(result); // doit être la liste

        console.log('=======================');
        for (res of result) {
            console.log(res.Titre);
        }
        cnx.end(function(err) {
            if (err) {
                throw err;
            }
        });
    });
});
