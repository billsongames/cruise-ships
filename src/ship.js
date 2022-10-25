class Ship {
  constructor(startingPort) {
    this.currentPort = startingPort;
  }

  setSail() {
    this.currentPort = '';
  }

  dock(destinationPort) {
    this.currentPort = destinationPort
  }
}





module.exports = Ship;