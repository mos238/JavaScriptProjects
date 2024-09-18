let spaceship = { //spaceship object
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  /*Q1.
  Write a function greenEnergy() that has an object (i.e. obj) as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.*/
  
  
  let greenEnergy = obj => { //function 1
    obj['Fuel Type'] = 'avocado oil'
  };
  /*Q2.
  Write a function remotelyDisable() that has an object (i.e. obj) as a parameter and sets (or reassigns) that object’s disabled property to true.*/
  let remotelyDisable = obj => { // function 2
    obj.disabled = true; // as it's a boolean so don't need 'ttyyhh'
  };
  /*Q3.
  Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.*/
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);