var express = require('express');
var router = express.Router();
var paramsController = require('../controllers/paramsController')

/* GET home page. */
router.get('/yourRoute', paramsController.One);

module.exports = router;