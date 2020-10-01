const express = require('express');

const app = express();

const mysql = require('mysql');

const cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jobboard"
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/request', (req, res, next) => {
    res.json({message: 'votre requete a bien été reçue'});
    next();
});

module.exports = app;

function selectAll(table) {
    cnx.connect(err => {
        if (err) {
            throw err;
        }

        cnx.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('=======================');
            console.log(result); // doit être la liste
            console.log('=======================');

            cnx.end(function (err) {
                if (err) {
                    throw err;
                }
            });
        });
    });
}

function selectById(table, id) {
    cnx.connect(err => {
        if (err) {
            throw err;
        }

        cnx.query(`SELECT * FROM ${table} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('=======================');
            console.log(result); // doit être la liste
            console.log('=======================');

            cnx.end(err => {
                if (err) {
                    throw err;
                }
            });
        });
    });
}

function del(table, id) {
    cnx.connect(err => {
        if (err) {
            throw err;
        }

        cnx.query(`DELETE FROM ${table} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('=======================');
            console.log(result); // doit être la liste
            console.log('=======================');

            cnx.end(err => {
                if (err) {
                    throw err;
                }
            });
        });
    });
}

function update(table, id, values) {
    cnx.connect(err => {
        if (err) {
            throw err;
        }

        cnx.query(`UPDATE ${table} SET ${values} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('=======================');
            console.log(result); // doit être la liste
            console.log('=======================');

            cnx.end(err => {
                if (err) {
                    throw err;
                }
            });
        });
    });
}

function create(table, values) {
    cnx.connect(err => {
        if (err) {
            throw err;
        }

        cnx.query(`INSERT INTO ${table} VALUES ${values}`, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('=======================');
            console.log(result); // doit être la liste

            console.log('=======================');
            for (res of result) {
                console.log(res.Titre);
            }

            cnx.end(err => {
                if (err) {
                    throw err;
                }
            });
        });
    });
}