let mysql = require('mysql');

let cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

//function requete(sql) {
    cnx.connect(function(err) {
        try {
            cnx.query('SELECT * FROM advertissements', function (err, result) {
                try {
                    console.log('=======================');
                    console.log(result); // doit être la liste

                    console.log('=======================');
                    for (res of result) {
                        console.log(res.Titre);
                    }
                }
                catch (err) {}

                cnx.end(function(err) {
                    try {

                    }
                    catch (err) {}
                });
            });
        }
        catch (err) {}
    });
//}

/*$('#del').on('click', function() {
   this.requete('DELETE FROM advertissements');
});*/
