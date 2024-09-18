/* Getters
Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'   */

/* Notice that in the getter method above:

We use the get keyword followed by a function.
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand. */

const robot = { //robot object
    _model: '1E78V2',
    _energyLevel: 100, // Example to trigger the else condition
    /* Q1. In robot, create a getter method named energyLevel using the get keyword. Leave the function body blank for now. */
    get energyLevel() {// getter. method named energyLevel
        /*
        Q2.Inside the getter method, add an if statement to check if this._energyLevel 
        is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.Make sure you return the string instead of logging it to the console. */
      if (typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`;
        /*Q3.If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. 
        Let’s add a default return statement for when such a scenario arises. Add an else statement that returns 'System malfunction: cannot retrieve energy level'. */
  
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
  
    }
    
  };
  /* Q4.Log the result of calling the getter method energyLevel on robot to the console.

Notice that the method will return a formatted response rather than just accessing a property!*/
  console.log(robot.energyLevel); // Don't need () here as need to treat as a property
  
  
  