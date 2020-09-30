(function() {
    const mysql = require('mysql');

    const cnx = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "jobboard"
    });

    function selectAll(table) {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`SELECT * FROM ${table}`, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                cnx.end(function(err) {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    function selectById(table, id) {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`SELECT * FROM ${table} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                cnx.end(function(err) {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    function del(table, id) {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`DELETE FROM ${table} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                cnx.end(function(err) {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    function update(table, id, values) {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`UPDATE ${table} SET ${values} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                cnx.end(function(err) {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    function create(table, values) {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`INSERT INTO ${table} VALUES ${values}`, function (err, result) {
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
    }
})()
