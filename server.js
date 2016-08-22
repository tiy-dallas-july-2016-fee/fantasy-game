var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var port = 5000;

var leaderboardData = [];

app.get('/api/leaderboard', function(req, res) {
  res.send(leaderboardData);
});

app.post('/api/leaderboard', function(req, res) {
  //insert into the array, AKA, push
  console.log('POST body', req.body);
  leaderboardData.push(req.body);

  res.send(leaderboardData);
});

app.listen(port, function() {
  console.log('listening on port', port);
});
