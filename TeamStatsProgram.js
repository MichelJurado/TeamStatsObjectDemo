//main object - team
const team = {
  //creating player object array
  _players: [{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
},{
  firstName: 'Leo',
  lastName: 'Messi',
  age: 21
},{
  firstName: 'Luis',
  lastName: 'Suarez',
  age: 22
}], //creating games object array
  _games:[{
  opponent: 'madrid',
  teamPoints: 3,
  opponentPoints: 0},
  {
  opponent: 'sevilla',
  teamPoints: 4,
  opponentPoints: 1},
  {
  opponent: 'manchester',
  teamPoints: 5,
  opponentPoints: 3
  }],
  get games(){
    return this._games;
  },
  get players(){
    return this._players;
  }, addPlayer(firstName,lastName,age){
    let player= {
      firstName,lastName,age
    };
    this.players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
    let gameObject={
      opponent,teamPoints,opponentPoints
    };
    this.games.push(gameObject);
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

console.log(team._players);

team.addGame("PSG",3,1);
team.addGame("arsenal",1,2);
team.addGame("BVB",7,1);

console.log(team._games);
