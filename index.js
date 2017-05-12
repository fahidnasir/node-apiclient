'use strict';

const express = require('express');
const app = express();


var viewspath = __dirname + '/app/views/';
app.set('view engine', 'pug');
app.set('views', viewspath);
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(express.static(__dirname + '/app/public'));

var apiRoutes = require("./app/server/routes/api");
var screenRoutes = require("./app/server/routes/index");
app.use('/', screenRoutes);
app.use('/api', apiRoutes);

var port = 8000;
const server = app.listen(port, function(){
	var host = server.address().address;
	console.log("server is listening at http://%s:%s", host, port);
});
