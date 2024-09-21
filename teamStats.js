const team = {
    _players: [
    {firstName:'Alexander', lastName: 'Alekhine', age:34},
    {firstName: 'Anatoly', lastName:'Karpov',   age:36},
    {firstName: 'Emanuel', lastName:'Lasker', age:24} 

    ],
    _games: [
    {opponent: 'Emanuel Lasker', teamPoints: 56 , opponentPoints: 45}, 
    {opponent:'Alexander Alekhine' , teamPoints: 78, opponentPoints: 56}, 
    {opponent: 'Anatoly Karpov', teamPoints: 97 } 
    
    ],
    get players(){ /* getter methods allows us to access data from our object (team)
        and binds a method to a property . */
        return this._players;
       
      },
      get games(){
        return this._games;
    
      },
      addPlayer(newFirstName, newLastName, newAge){ // create new local object, then append to array
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);

      },


      addGame(newOpponent, newTeamPoints, newOpponentPoints ) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game);
      }

}; // this is outside object

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Abu Sayed', 32, 49);
console.log(team.games);