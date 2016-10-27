var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//1. add  custom module
var ejs = require('ejs');
var engine = require('ejs-locals');
var http = require('http');


//2.bind data.js file in routes folder
var data = require('./routes/data');

var app = express();
var server = http.createServer(app);

app.engine('ejs', engine);


//3.ser server port numver;
app.set('port',  '45455');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//4. route  data.js with get(or post)
app.use('/',data);

//app.route('/test').get(data.test);

//app.route('/test2').get(function(req, res) {
//console.log('test2 is called');
//});



//5.this is run server
server.listen(app.get('port'), function() {
console.log('dragon`s test server is running on 45455 port');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
