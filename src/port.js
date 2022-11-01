(function exportPort() {
  class Port {
    constructor(name, ships = []) {
      this.name = name
      this.ships = ships
    }

    addShip(ship) {
      this.ships.push(ship)
    }

    removeShip(ship) {
      const shipIndex = this.ships.indexOf(ship)
      this.ships.splice(shipIndex, 1)
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}())