
var express = require('express');
var app = express();

app.get('/*', function (req, res) {
  //console.log(req);
  //console.log(req);
  //.replace(",","newchar", -1)
  var text = decodeURIComponent(req.originalUrl);
  text = text.replace("/","");
  res.send(text);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
