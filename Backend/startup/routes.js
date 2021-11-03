const express = require('express');
const customers = require('../routers/customers');
const auth = require('../routers/auth');
const users = require('../routers/users');
const jsonFormDetails = require('../routers/jsonFormDetails')


module.exports = function(app) {
    app.use(express.json());
    app.use('/api/customers', customers)
    app.use('/auth', auth);
    app.use('/api/users', users);
    app.use('/api/json', jsonFormDetails);
}