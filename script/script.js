(function() {
    let mysql = require('mysql');

    let cnx = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "test"
    });

    function selectAll(table) {
        cnx.connect(function(err) {
            try {
                cnx.query(`SELECT * FROM ${table}`, function (err, result) {
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
                        try {}
                        catch (err) {}
                    });
                });
            }
            catch (err) {}
        });
    }

    function selectById(table, id) {
        cnx.connect(function(err) {
            try {
                cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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
                        try {}
                        catch (err) {}
                    });
                });
            }
            catch (err) {}
        });
    }

    function del(id) {
        cnx.connect(function(err) {
            try {
                cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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
                        try {}
                        catch (err) {}
                    });
                });
            }
            catch (err) {}
        });
    }

    function update() {
        cnx.connect(function(err) {
            try {
                cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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
                        try {}
                        catch (err) {}
                    });
                });
            }
            catch (err) {}
        });
    }

    function create() {
        cnx.connect(function(err) {
            try {
                cnx.query(`SELECT ${id} FROM ${table} WHERE ${id}=${id}`, function (err, result) {
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
                        try {}
                        catch (err) {}
                    });
                });
            }
            catch (err) {}
        });
    }
})()
