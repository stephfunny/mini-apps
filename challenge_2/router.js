var controller = require('./controller');
var router = require('express').Router();

router.get('/', controller.get);

router.post('/', controller.post);


module.exports = router;