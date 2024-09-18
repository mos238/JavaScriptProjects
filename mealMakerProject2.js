const menu = { // menu object
    _meal: '', // property 1
    _price: 0, // property 2


    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },
            
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() { //Add a getter method here :This method checks if both _meal and _price are truthy.
        if (this._meal && this._price) {
            return `Todays Special is ${this._meal} for $${this._price}!`;
        }   else {
            return `Meal or price not set correctly!`;

            }
        },
};

menu._meal = 'Sheek kebab';
menu._price = 8;
console.log(menu.todaysSpecial); 

