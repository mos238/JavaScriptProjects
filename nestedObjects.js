let spaceship = {
    name: "Intergalactic Cruiser",
    speed: 20000, // in km/h
    fuelType: "antimatter",
    capacity: 100, // number of passengers
    crew: {
      captain: "James T. Kirk",
      firstOfficer: "Spock",
      chiefEngineer: "Montgomery Scott"
    },
    weapons: {
      laserCannons: 4,
      photonTorpedoes: 10,
      shields: {
        strength: 100, // in percentage
        type: "deflector"
      }
    },
    travel: function(destination) {
      console.log(`The spaceship is heading to ${destination} at ${this.speed} km/h.`);
    },
    refuel: function() {
      console.log(`Refueling the spaceship with ${this.fuelType}.`);
    }
  };
  
  // Example usage:
  spaceship.travel("Mars");
  spaceship.refuel();
  