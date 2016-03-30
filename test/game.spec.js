// Import chai.
let chai = require('chai'),
  path = require('path');

var should = require('chai').should;

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
let game = require(path.join(__dirname, '..', 'modules/game'));

// The fat arrow (=>) syntax is a new way to define
// functions in ES6. One feature that is different
// from the usual "function" keyword is that the scope
// is inherited from the parent, so there is no need to write
//
//   function() {
//     ...
//   }.bind(this)
//
// anymore. In this case we are not using "this" so the new
// syntax is just used for brevity.
describe('game', () => {
  describe('#win_dec', () => {
    let gm;

    beforeEach(() => {
      // Create a new game object before every test.
      gm = new game();
    });

    it('returns the win_dec', () => {
      // This will fail if "game.win_dec" does
      // not equal super good
      //gm.win_dec.should.equal("Big Win!");
    });

    it('can be changed', () => {
      // Assert that the width can be changed.
      gm.win_dec = "Fantastic";
      gm.win_dec.should.equal("Fantastic");
    });

  });
});