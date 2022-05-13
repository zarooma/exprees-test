var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

// Without middleware
app.get('/', function(req, res){
	var options = {
		root: path.join(__dirname)
	};
	
	var fileName = 'Hello.html';
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
