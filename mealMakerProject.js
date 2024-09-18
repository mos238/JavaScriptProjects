/*   Meal Maker
A restaurant has hired you to create a function for their website that 
allows them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who uses 
the new function can generate a meal and a price for Today’s Special without any embarrassing errors! */

/* Task1. We’ll hold the meal, price, and their respective getters and setters in an object named menu.

In app.js, create an empty menu object.*/

const menu = { //object called menu
    /* Task 2. The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.
Within the menu object, create a _meal property with a value of an empty string (''). This will eventually hold the name of the meal.*/
    _meal: '', // property 1
    _price: 0, // property 2 // Task 3. Now add a +price properry with value 0.
    
     /* Task 5. To safely reassign the two menu properties, we can add setters that type check the values being assigned.
Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter. Leave the function body empty for now.
  */
    
/* Task 6.In the body of the setter method, create an if statement that checks if mealToCheck is a string. 
If it is, return the object’s _meal property with mealToCheck assigned as the value.. */

    set meal(mealToCheck) {
      if(typeof this._meal === 'string'){
        return this._meal;
        }
      },
     /* Task 7. Utilizing the same procedures as above, use the set keyword to create a price setter with priceToCheck as a parameter. 
     This method should make sure the value associated with _price is always a number */ 
    set price(priceToCheck) {
      if(typeof this._price === 'number'){
        return this._price;
        }
      },

/*Task 9. Now it’s time to safely return the values of the _meal and _price properties in a readable form. 
Instead of directly accessing the properties, we can use a getter method that proactively checks if a meal and 
price have been properly set, before returning the values.

Below the setters, use the get keyword to create a todaysSpecial method. Leave the function body empty for now. */

 //Add a Getter Method
    get todaysSpecial() {
        if (typeof this._meal && this._price) {
            return `Todays Special is ${this._meal} for $${this._price}!`;
        }   else {
            return "Meal or price not set correctly!";

            }
        },
    };

/*Task 10. In the body of the getter, create an if…else statement to check if _meal and _price values exist 
(or are truthy values). If so, return a string telling potential website visitors what Today’s Special is. 
For example: “Today’s Special is Spaghetti for $5!”

If _meal and _price values do not exist (or are falsy) return the string 'Meal or price was not set correctly!'. */

 menu._meal = 'Fish and chips'
 menu._price = 11;
console.log(menu.todaysSpecial);