let spaceship = { //outerObject
    crew: { //innerObject

        captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },

        'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },

        medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },

        translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

/* Q1.
Using for...in, iterate through the spaceship.crew object in the code editor and console.log() 
a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'. */
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`) 
  };

/* Q2.
Using for...in, iterate through the spaceship.crew object in the code editor and console.log() 
a list of crew names and degrees in the following format: 
[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'*/

console.log('\n'); // use this code to do a newline(\n)
console.log('.............................................................................');

  for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
  };

/*/Or simply use code below:

//. Iterating through spaceship.crew using for....in
for (let role in spaceship.crew){
  console.log(`${role}: ${spaceship.crew[role].name}`);
  console.log(`${spaceship.crew[role].name}: ${spaceship.crew[role].degree}`);

}
/*/

/* Review
Way to go! You’re well on your way to understanding the mechanics of objects in JavaScript. By building your own objects, 
you will have a better understanding of how JavaScript built-in objects work as well. 
You can also start imagining organizing your code into objects and modeling real world things in code.

Let’s review what we learned in this lesson:

1. Objects store collections of key-value pairs.

2. Each key-value pair is a property—when a property is a function it is known as a method.

3. An object literal is composed of comma-separated key-value pairs surrounded by curly braces.

4. You can access, add or edit a property within an object by using dot notation or bracket notation.

5.We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.

6.We can navigate complex, nested objects by chaining operators.

7.Objects are mutable—we can change their properties even when they’re declared with const.

8.Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
We can iterate through objects using the For...in syntax. */


