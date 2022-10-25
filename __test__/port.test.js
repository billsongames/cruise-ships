const Port = require('../src/port');

describe('constructor', () => {
  it('returns a Port Object ', () => {
    expect(new Port()).toBeInstanceOf(Object)
  });
});

describe('name of port is correct', () => {
  const port = new Port('Dover')

  it('name of port is Dover', () => {
    expect(port.name).toBe('Dover')
  });
});

describe('check port is a port Object', () => {
  const port = new Port('Dover')

  it('port should be a port object ', () => {
    expect(port).toBeInstanceOf(Object)
  });
});