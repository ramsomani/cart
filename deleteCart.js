var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.delete('/deleteCart', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "Cart.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["cart" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

})