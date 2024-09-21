/* How can we call the method in the code below?

Code */

let myObj = {
  sayHello() {
    return 'Hello there!';
  }
} 

myObj.sayHello()

console.log(myObj);

/* Q2 */

let myObj2 = {
    greeting: 'hello'
};
console.log(myObj2);

/* Q3 Given the following code, which expression will evaluate to apples?*/

const refrigerator = {
    dairy: ['cheese', 'milk', 'sour cream'],
    temperature: 35,
    'produce drawer': {
      vegetables: ['lettuce', 'broccoli', 'peas'],
      fruit: ['apples', 'berries', 'grapes'] 
    }
  }

  console.log(refrigerator['produce drawer'].fruit[0]); //answer

/* Q5. */
let tempObj = {
    _num: 22,
    get num() {
        return this._num;
    }
};

console.log(tempObj.num());

/* What will the following code output? */
const car = {
    numDoors: 4,
    isDirty: true,
    color: 'red'
  }
  
  for (let key in car) {
    console.log(key)
  }


  /* Q Which of the following Object methods can be used to copy all of the properties of an object into a new object?*/

  //Answer: Object.assign()
