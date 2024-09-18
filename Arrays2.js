// .length

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); //Output 3

//.push

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('brush your teeth', 'go to bed');
console.log(chores);

//.pop


const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed = chores2.pop();
console.log(chores2);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//Use .shift() method to remove 1st item from array groceryList
groceryList.shift();
groceryList.unshift('popcorn');

console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


