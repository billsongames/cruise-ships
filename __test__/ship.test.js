const Ship = require('../src/ship');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('has a starting port', () => {
  const ship = new Ship('Calais')

  it('has a starting point ', () => {
    expect(ship.startingPort).toEqual('Calais')
  });
});