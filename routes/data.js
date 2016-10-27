var mysql = require('promise-mysql');
var knox = require('knox');
var express = require('express');
var router = express.Router();
var S3_KEY = process.env.AWS_ACCESS_KEY_ID;
var S3_SECRET = process.env.AWS_SECRET_ACCESS_KEY;
var S3_BUCKET = 'tndn';

//get NOER_ENV variables for RDS database
var db_port = process.env.DB_PORT;
var db_user = process.env.DB_USER;
var db_pw = process.env.DB_PW;
var db_host = process.env.DB_HOST;
var db_name='tndn_package_database';
//create s3 knox client
var client = knox.createClient({
    key: S3_KEY,
    secret: S3_SECRET,
    bucket: S3_BUCKET
});

// create mysql db config
/* when use database dispel this comment
var config = {
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_pw,
    database: db_name,
};

var conn;
mysql.createConnection(config).then(function(connection) {
    conn = connection;
});
*/

//1. route API
router.get('/test', function(req, res, next) {
//2. request parameter, if get or post method
var get = req.query.get;
var post = req.body.post;

//3. send response data
res.send('get parameter is '+get);
res.send('post parameter is '+ post);
res.end();
});

module.exports = router;

//1. bind test API from app.js
//exports.test = function(req, res){
//console.log('test is called');
//2. request parameter, if get or post method
//var get = req.query.get;
//var post = req.body.post;

//3. send response data
//res.send('get parameter is '+get);
//res.send('post parameter is '+ post);
//res.end();

//};
