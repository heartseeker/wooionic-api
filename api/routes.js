var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 8000; 

var url = require('url');

var wooCommerce = require('../settings/woo-commerce.js').wooCommerce;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 

router.get('/', function (req, res) {
    res.send('woocommerce api home');
});

router.get('/orders', function (req, res) {
    wooCommerce.getAsync('orders').then(function(result) {
        res.json(JSON.parse(result.toJSON().body));
    });
});

router.get('/products', function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.search;

    wooCommerce.getAsync('products' + query).then(function(result) {
        res.json(JSON.parse(result.toJSON().body));
    });
});

module.exports = router;