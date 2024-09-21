const robot = {
    _energyLevel: 100, //this is a property
    recharge(){ //this is a method
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };

  /*Q1.
Below the robot object, reassign the _energyLevel property to 'high'.
To reassign a property, you can use dot notation to access the property and then use the = operator to assign it to another value. */

  robot._energyLevel = 'high';

  /* Q2.
Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel. 
What will happen now that _energyLevel isn’t a number?
Call .recharge() on robot to find out. */

  robot.recharge();
  
  
  