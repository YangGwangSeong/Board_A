var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, username:"test"},
    {id:2, username:"무야호2"},
    {id:3, username:"퇴근"}
  ]);
});

module.exports = router;
