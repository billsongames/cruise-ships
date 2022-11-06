const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Port', () => {

  describe('port', () => {
    let dover
    let calais
    let itinerary = jest.fn()
    let ship = jest.fn()

    beforeEach(() => {
      dover = new Port('Dover')
      calais = new Port('Calais')
      itinerary = new Itinerary([dover, calais])
      ship = new Ship(itinerary)
    })

  it('returns a Port object', () => {
    expect(new Port('Dover')).toBeInstanceOf(Object);
  });

  it('has a name', () => {
/*     const port = new Port('Dover') */
    expect(dover.name).toBe('Dover')
    
  });

/*   describe('port has a ship', () => { */
  it('should ', () => {
/*  const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary) */
    const ship = jest.fn()

    dover.addShip(ship)
    expect(dover.ships[0]).toBe(ship)

    dover.removeShip(ship)
    expect(dover.ships.includes(ship)).toBeFalsy()
  });
  
})
})