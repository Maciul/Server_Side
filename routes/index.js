require('dotenv').config();
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: 'We are in great success!'
  });
});

router.get('/weather', function(request, response, next) {
  request("http://api.aerisapi.com/forecasts/80211?client_id=" +
  process.env.CLIENT_ID + "&client_secret=" + process.env.CLIENT_SECRET, function(err, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });
});

module.exports = router;
