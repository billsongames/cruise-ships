const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => {
  let ports = jest.fn()
  
  it('returns an Itinerary object', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('has a ports array', () => {
    const dover = new Port('Dover')
    const calais = new Port('Calais')
    const itinerary = new Itinerary([dover, calais])
    expect(itinerary.ports).toBeInstanceOf(Array)
    
  });
});