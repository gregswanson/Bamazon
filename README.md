# Bamazon

##Challenge 1
###BamazonCustomer.js

* Created MySQL database called 'Bamazon'

* Created table called 'products' and populated it with 10 products

<img src="https://github.com/gregswanson/Bamazon/blob/master/img/img1.png" alt="Image 1" height="200px"/>

* BamazonCustomer.js file was created

* Initial display showing the ids, names, and prices of products for sale

![Image 2](https://github.com/gregswanson/Bamazon/blob/master/img/img2.png)

* User is prompted with two messages.

* If there is not enough quanity the message "Insufficient quantity" appears and the order is prevented from going though.

![Image 3](https://github.com/gregswanson/Bamazon/blob/master/img/img3.png)

* If there is sufficient stock, the order goes through and shows the total cost of the purchase

![Image 4](https://github.com/gregswanson/Bamazon/blob/master/img/img4.png)

* The SQL database is then updated by subtracting the quantity ordered.
	* (Notice the quanity on the iPhone has gone from 45 to 41).

<img src="https://github.com/gregswanson/Bamazon/blob/master/img/img5.png" alt="Image 5" height="200px"/>

##Challenge 2
###BamazonManager.js

* BamazonManager.js file was created.

* When run, the initial display shows menu options that are available.

![Image 6](https://github.com/gregswanson/Bamazon/blob/master/img/img6.png)

* When option 1 is selected, a list all of the products available for sale: the item IDs, names, prices, and quantities is shown. 

![Image 7](https://github.com/gregswanson/Bamazon/blob/master/img/img7.png)

* When option 2 is selected, all items for which the quantity available is less than 5 are shown.

![Image 8](https://github.com/gregswanson/Bamazon/blob/master/img/img8.png)

* When option 3 is selected, two prompts are given.
	* The user has the ability to update the quantity in stock. 

![Image 9a](https://github.com/gregswanson/Bamazon/blob/master/img/img9a.png)

* The update is refelected in the SQL database
	* (Notice PS4 StockQuanity was updated from 2 to 10).

<img src="https://github.com/gregswanson/Bamazon/blob/master/img/img9b.png" alt="Image 9b" height="200px"/>

* When option 4 is selected, the user has the ability to add a new product to the table through a series of prompts

![Image 10a](https://github.com/gregswanson/Bamazon/blob/master/img/img10a.png)

* The new item 'Pillow' was added to the product list
	* (Note: the ItemID jumps from 19 to 22. The ItemId auto increments however previous testing junk data was removed for demo purposes). 

<img src="https://github.com/gregswanson/Bamazon/blob/master/img/img10b.png" alt="Image 10b" height="200px"/>



