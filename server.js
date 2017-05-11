var express = require("express"),
    app = express(),
    http = require("http"),
    jsonfile = require('jsonfile'),
    file = './assets/cart.json',
    fs = require('fs'),
    wines = require('./routes/employee');
        bodyParser = require('body-parser'),
    cartPageData = [], homePageData = [];

    app.get('/employees/:id/reports', wines.findByManager);
    app.get('/employees/:id', wines.findById);
    app.get('/employees', wines.findAll);


app.get("/", function(req, res) {
  fs.readFile('index.html', 'utf8', function(err, contents) {
        if (!err)
            res.send(contents);
        else
            res.send('error' + err);
    });
})

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


var server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('Employee directory started ' + port);
});
