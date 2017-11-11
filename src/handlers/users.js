var User = require('../models/User').model;

var getAll = function(req, res){
	User.find({})
		/*.exec(function(err, users){
			if(err){
				console.error(err);
				res.statusCode(500).end('Error ocuured');
			} else {
				console.log(result);
				res.json(result);
			}
		});*/
		.then(function(result){
			console.log(result);
			res.json(result);
		}, function(err){
			console.error(err);
			res.status(500).end('Error ocuured');
		});
}

var create = function(req, res){
	console.log(req.body);
	let newUser = new User(req.body);
	newUser.save((err) => {
		if(err){
			res.status(500).end('Error occured');
		} else {
			res.status(201).end('User created');
		}
	});
}

module.exports = {getAll, create};