(function exportShip() {
  class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary
      this.currentPort = itinerary.ports[0]
      this.previousPort = null
    }

    setSail() {
      const itinerary = this.itinerary
      const portIndex = itinerary.ports.indexOf(this.currentPort)

      if (portIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary')
      }
      this.currentPort.removeShip()
      this.previousPort = this.currentPort
      this.currentPort = null
    }

    dock() {
      const itinerary = this.itinerary
      const portIndex = itinerary.ports.indexOf(this.previousPort)
      this.currentPort = this.itinerary.ports[portIndex + 1]
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}())