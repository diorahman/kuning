var express = require('express')
var server = express()
server.use(express.static(__dirname + '/public'))
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log("Listening on " + port);
});
