var express = require('express');
var router = express.Router();


const index = require('../../FRONTEND/nexon-dabang-m/src/router/index')


router.get('/', function (req, res, next) {
  res.send(movies)
});


module.exports = router;