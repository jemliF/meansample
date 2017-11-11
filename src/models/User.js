var mongoose = require('mongoose');

var schema = mongoose.Schema({
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	age: {
		type: Number
	},
	createdAt:{
		type: Date,
		default: Date.now()
	}
});

var model = mongoose.model('user', schema);

module.exports = {schema, model};
