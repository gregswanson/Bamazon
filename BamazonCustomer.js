var prompt = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  //password : 'secret',
  database : 'bamazon'
});
 
connection.connect();
prompt.start();


 
 //Show all items

 connection.query("SELECT * FROM products", function(err, rows, fields) {
  if (err) throw err;
 for (var i=0; i < rows.length; i++){
   console.log( "ID: " + rows[i].ItemID + " , " + 
   				"Name: " + rows[i].ProductName + " , " + 
   				"Price: $" + rows[i].Price);
}

  // Get two properties from the user: ID and Quantity 
 
  prompt.get(['please_enter_id_of_product', 'how_many_would_you_like'], function (err, result) {
    var product = result.please_enter_id_of_product;
    var quantity = parseInt(result.how_many_would_you_like);
    
		connection.query("SELECT * FROM products WHERE ItemID='" + product + "'", function(errTwo, rowsTwo, fieldsTwo) {
		  if (err) throw err;
		 	if (quantity <= rowsTwo[0].StockQuantity){
			 		
//change quantity
			 		connection.query("UPDATE products SET StockQuantity=StockQuantity-2 WHERE ItemID='" + product + "'", function(err, rows, fields) {
					  if (err) throw err;
//log order	 
					  console.log("You Selected: " + quantity + " " + rowsTwo[0].ProductName +
		 			  	" Total: $" + quantity*rowsTwo[0].Price);
					});


		 			  
		 			} else {
		 				console.log("Insufficient quantity. The order has been cancelled.");
		 			}
		});

		

  });




});

//connection.end();


