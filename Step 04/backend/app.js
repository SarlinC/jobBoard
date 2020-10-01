const express = require('express');

const app = express();

const requests = require('./requests');

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

