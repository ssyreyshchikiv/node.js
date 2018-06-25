var express = require("express");
var router = express.Router();



router.use('/admin', function(req, res, next) {
	res.send('User add');
});

module.exports = router;

