let menu = {
    _meal: "",
    _price: 0,
    
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    
    get todaySpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
};

// Array of meal objects
const meals = [
    { meal: "Spaghetti", price: 8 },
    { meal: "Burger", price: 6 },
    { meal: "Tacos", price: 7 },
    { meal: "Pizza", price: 9 },
    { meal: "Salad", price: 5 }
];

// Function to randomly select a meal and update the menu
function randomizeMeal() {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];
    menu.meal = randomMeal.meal;
    menu.price = randomMeal.price;
}

// Example usage:
randomizeMeal();
console.log(menu.todaySpecial); // Outputs something like: "Today's Special is Pizza for $9!"
