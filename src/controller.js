(function exportController() {
  function Controller(ship) {  
    this.ship = ship
    this.initialiseSea()
  }

  Controller.prototype.initialiseSea = function() {
    let seaID = 0
    window.setInterval(() => {
      if (seaID === 0) {
        document.querySelector("#viewport").style.backgroundImage = "url('images/water1.png')";
        seaID = 1
      } else {
        document.querySelector("#viewport").style.backgroundImage = "url('images/water0.png')";
        seaID = 0
      }
    }, 1000)
  }

  Controller.prototype.renderPorts = function(ports) {
    let portsElement = document.querySelector("#ports")
    
    ports.forEach((port, index) => {
      const newPort = document.createElement("div");
      newPort.setAttribute("class", "port")
      newPort.dataset.portName = port.name
      newPort.dataset.portIndex = index

      portsElement.appendChild(newPort)

      let portsElementWidth = parseInt(portsElement.style.width, 10)
      portsElementWidth += 256
      portsElement.style.width = `${portsElementWidth}px`
    })
  }

  Controller.prototype.renderShip = function() {
    const ship = this.ship

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort)
    const portIndexMatch = document.querySelector(`[data-port-Index = '${currentPortIndex}']`)
    
    const shipElement = document.querySelector("#ship")
    shipElement.style.top = `${portIndexMatch.offsetTop + 32}px `
    shipElement.style.left = `${portIndexMatch.offsetLeft - 24}px`
  }








  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}())
