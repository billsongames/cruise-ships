const Port = require('../src/port');
const Ship = require('../src/ship');

describe('constructor', () => {
  it('returns a Ship object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});


describe('has a starting port', () => {
  const ship = new Ship('Dover')
  const port = new Port('Dover')

  it('has a starting point', () => {
    expect(ship.currentPort).toBe('Dover')
  });
});

describe('ship has a port object', () => {
  const port = new Port('Dover')
  const ship = new Ship(port)  

  it('ship has a port object ', () => {
    expect(ship.currentPort).toBeInstanceOf(Object)
 /*    expect(ship.portName).toBe('Dover') */

  });
});

describe('check whether ship can set sail', () => {
  const ship = new Ship('Calais', {})
  ship.setSail()

  it('ship can set sail', () => {
    expect(ship.currentPort).toBeFalsy()
  });
});

describe('ship can dock', () => {
  const dover = new Port('Dover')
  const calais = new Port('Calais')
  const ship = new Ship(dover)

  it('ship can dock at destination port ', () => {
    ship.dock(calais)
    expect(ship.currentPort).toBe(calais)
  });
});