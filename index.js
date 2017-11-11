require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose.connect('mongodb://' + process.env.MONGODB_HOST + ':' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_DATABASE, {
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASSWORD
    }, (err) => {
        if (err) {
            console.log('---------------------------------------------------');
            console.error('------------- MongoDB is down: ' + err)
            console.log('---------------------------------------------------');
        } else {
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log('+++++++++++++++ MongoDB is up +++++++++++++++++++++');
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
        }
    });

var users = require('./src/controllers/users');

var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));

app.use('/api/v1', users);

app.get('/', function(req, res){
	res.end('We rock!');
});

app.listen(process.env.APP_PORT, function(err){
	if(err){
		console.error(err);
	} else {
		console.log('app running at ', process.env.APP_PORT);
	}
});