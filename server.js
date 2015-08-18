var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(path.join(__dirname, '/app')));

// server.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var s = server.listen(3000, function () {
  var host = s.address().address;
  var port = s.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
