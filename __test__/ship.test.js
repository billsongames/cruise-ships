const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {

  describe('constructor', () => {
/*     let dover = jest.fn()
    let calais = jest.fn()
    let itinerary = jest.fn()
    let ship

    beforeEach(() => {
      dover = new Port('Dover')
      calais = new Port('Calais')
      itinerary = new Itinerary([dover, calais])
      ship = new Ship(itinerary)
    }) */

    let dover;
    let calais;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Dover',
        ships: []
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Calais',
        ships: []
      };

      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    })


  it('returns a Ship object', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais]) */
    
    expect(ship).toBeInstanceOf(Object);
  });

  it('gets added to port on instantiation', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    dover.addShip(ship)

/*     expect(dover.addShip).toHaveBeenCalled() */
  });
  
  it('gets removed from port', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    dover.addShip(ship)
    dover.removeShip(ship)

    expect(ship.currentPort.ships).not.toContain(ship)
  });  

  it('has a starting point ', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    expect(ship.currentPort).toBe(dover)
  
  });

  it('previous port is null ', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    expect(ship.previousPort).toBeNull()
  });


/* ######################################################### */

/*   describe('ship can set sail', () => { */
  it('ship can set sail ', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    ship.setSail()
    expect(ship.currentPort).toBeFalsy()
    expect(dover.removeShip).toHaveBeenCalled()

    /* expect(ship.previousPort.ships).not.toContain(ship) */
  });

/*   describe('ship can dock', () => { */
  it('ship can dock at destination port', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    ship.setSail()
    ship.dock()

    expect(ship.currentPort).toBe(calais)    
    expect(ship.currentPort.ships).not.toContain(ship)
  });

  it('ship cant sail further than itinerary ', () => {
/*     const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */

    ship.setSail()
    ship.dock()

    expect(() => ship.setSail()).toThrowError('End of itinerary')
  });  
})
})