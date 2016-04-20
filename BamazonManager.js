var prompt = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
//password : 'secret',
  database : 'bamazon'
});

var selection = "";
 
connection.connect();
prompt.start();

//list options
console.log("1) View Products for Sale"+"\n"
			+"2) View Low Inventory"+"\n"
			+"3) Add to Inventory"+"\n"
			+"4) Add New Product");

//begin prompt
prompt.get(['please_select_menu_number'], function (err, result) {

//save value to variables
 var selection = parseInt(result.please_select_menu_number);
    

//switch case
switch(selection) {
    case 1:
 //list items currently in stock;
        connection.query("SELECT * FROM products", function(err, rows, fields) {
		  if (err) throw err;
		 	for (var i=0; i < rows.length; i++){
		   		console.log( "ID: " + rows[i].ItemID + " , " + 
		   				"Product Name: " + rows[i].ProductName + " , " + 
		   				"Price: $" + rows[i].Price + " , " + 
		   			 	rows[i].StockQuantity + " items in stock.");
			}

			connection.end();
		});
        break;
    
    case 2:
//list all items with a stck quantity less than 5
        connection.query("SELECT * FROM products WHERE StockQuantity<=5", function(err, rows, fields) {
		  if (err) throw err;
		 	for (var i=0; i < rows.length; i++){
		   		console.log( "ID: " + rows[i].ItemID + " , " + 
		   				"Product Name: " + rows[i].ProductName + " , " + 
		   				"Price: $" + rows[i].Price + " , " + 
		   			 	rows[i].StockQuantity + " items in stock.");
			}

			connection.end();
		});
        break;
   	case 3:
//get information to update mysql database
	    prompt.get(['enter_product_ID', 'enter_quantity'], function (err, result) {
		    var product = result.enter_product_ID;
		    var quantity = parseInt(result.enter_quantity);
		    //console.log(quantity);
		    var queryString = "UPDATE products SET StockQuantity=" + quantity + " WHERE ItemID=" + product;

//update database
		connection.query(queryString, function(err, rows, fields) {
		  if (err) throw err;
		 	console.log("Item: " + product + ", has been updated to quantity of: " + quantity);
			
			});

		connection.end();

	     });

	    break;
	
	case 4:
	console.log("case 4");
//get information to update mysql database
	    prompt.get(['enter_product_name', 'enter_department_name', 'enter_price', 'enter_quantity'], function (err, result) {
		    var product = result.enter_product_name;
		    var department  = result.enter_department_name;
		    var price = result.enter_price;
		    var quantity = result.enter_quantity;

//update database
		connection.query("INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES('" + product + "', " + "'" + department + "', " + "'" + price + "', " + "'" + quantity + "')", function(err, rows, fields) {
		  if (err) throw err;
		 	console.log("Item: " + product + ", has been added.");
			
			});

		connection.end();
	    
	    });	    

	    break;

    default:
    console.log("That is not an option");
    connection.end();
}


});
