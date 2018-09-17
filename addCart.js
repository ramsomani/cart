var express = require('express');
var app = express();
var fs = require("fs");

var cart = {
   "cart" : {
      "cart-id" : 543,
	  "price" : 500.89,
	  "quantity" : 2,
      "status": "S",
      "availableMessage": "Out of Stock",
      "ActiveCartItem" : {
        "cartItemId" : 879,
        "totalProducts" : 5,
        "netPrice" : 456,
        "currency" : "$"
      }
   }
}

app.post('/addCart', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "Cart.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["cart"] = cart["cart"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

})