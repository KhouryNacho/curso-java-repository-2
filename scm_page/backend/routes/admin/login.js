var express = require('express');
var router = express.Router();
var usersModel = require('./../../models/usersModel');

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});


router.post('/', async (req, res, next) => {
    try {
        var user_name = req.body.user_name; //take the info from the input
        var user_password = req.body.user_password; //password still unencrypted

        var data = await usersModel.getUserByUsernameAndPassword(user_name, user_password);

        if (data != undefined) {
            req.session.user_id = data.user_id;
            req.session.user_name = data.user
            
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;