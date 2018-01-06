var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 8000; 

var wooCommerce = require('./settings/woo-commerce.js').wooCommerce;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
var routes = require('./api/routes.js');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routes);

app.listen(port, () => {
    console.log('running on port http://localhost:' + port);
});


