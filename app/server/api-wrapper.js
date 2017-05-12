const request = require('request');

const apiKey = "abcdefghijklmnopqrstuvwxyz";

const host = '';
const port = 80;
const serverApiPath = '/api';

const baseRequest = request.defaults({
											headers: {
												'x-token': base64_encode(apiKey),
												'baseUrl': host+port+serverApiPath}
										});
function base64_encode(str) {
	encoded = new Buffer(str).toString('base64');
	return encoded;
}
function base64_decode(str) {
	decoded = new Buffer(str, 'base64').toString('ascii');
	return decoded;
}

exports.ping = function(){
	console.log('API Wrapper is pinged');1
	
}
