var express = require('express');
var router = express.Router();
var usersModel = require('./../../models/usersModel');

router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout'
    });
});

module.exports = router;