const vampire = { //vampire object
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };

  /* If we wanted to extract the residence property as a variable, we could use the following code: */

/*/const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

const name = vampire.name;
console.log(name); /*/

/*Or use following 'destructured assignment to do the same thing as above */

const {residence} = vampire;
console.log(residence); //Prints 'Transylvania

/*......................................................................................................... */

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
/*Q1.
Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint. */
const {functionality} = robot;
/* Q2Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.

Take advantage of this shortcut and call the .beep() method on functionality.*/
functionality.beep();


























































































































