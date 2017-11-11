var Router = require('express').Router;
var users = require('../handlers/users');
var router = Router();

router.get('/users', users.getAll);

router.post('/users', users.create);

module.exports = router;