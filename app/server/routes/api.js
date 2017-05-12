const express = require('express');
const router = express.Router();

const apiWrapper = require('../api-wrapper');

router.get('/ping', function(req, res){
	apiWrapper.ping();
	console.log('API Response');
	res.send('pinged');
});

module.exports = router;
