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
                    console.log('fail');
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

            cnx.query(`SELECT * FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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

    function del(id) {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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

    function update() {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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

    function create() {
        cnx.connect(function(err) {
            if (err) {
                throw err;
            }

            cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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
