const Ship = require('../src/ship');

describe('constructor', () => {
  it('returns a Ship object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});


describe('has a starting port', () => {
  const ship = new Ship('Calais')

  it('has a starting point', () => {
    expect(ship.startingPort).toBe('Calais')
  });
});

describe('check whether ship can set sail', () => {
  const ship = new Ship('Calais')
  ship.setSail()


  it('ship can set sail', () => {
    expect(ship.startingPort).toBeFalsy()
  });
});