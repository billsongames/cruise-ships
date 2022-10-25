const Port = require('../src/port');

describe('constructor', () => {
  it('returns a Port Object ', () => {
    expect(new Port()).toBeInstanceOf(Object)
  });
});

describe('check port has a name', () => {
  const port = new Port('Dover')

  it('port name should be Dover ', () => {
    expect(port.name).toEqual('Dover')
  });
});