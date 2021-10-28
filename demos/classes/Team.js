/* AVOID THIS STYLE, it's old and clunky and error-prone
function TeamFn( wins, losses ) {
  this.wins = wins;
  this.losses = losses;
}
*/

// Assume this is a reference to dojo
const dojo = {
  declare: () => {},
};

// Dojo style
const TeamDojo = dojo.declare( null, {
  constructor: function( wins, losses ) {
    this.wins = wins;
    this.losses = losses;
  },
} );

// Prefer this....
class Team {
  wins = 0;
  losses = 0;

  constructor( wins, losses ) {
    this.wins = wins;
    this.losses = losses;
  }
}

// const team1 = new TeamFn( 20, 10 );
const team2 = new Team( 20, 10 );
