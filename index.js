'use strict';

const request = require('request');
const express = require('express');
const app = express();



var port = 8000;
const server = app.listen(port, function(){
	var host = server.address().address;
	console.log("server is listening at http://%s:%s", host, port);
});
