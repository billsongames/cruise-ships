(function exportController() {
  function Controller(ship) {  
    this.ship = ship
    this.sailing = false
    this.initialiseSea()

    document.querySelector("#sailbutton").addEventListener('click', () => {
      if (this.sailing == false) {
        this.setSail()
      }
  
    })
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

  Controller.prototype.setSail = function() {
    const ship = this.ship
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort)
    const nextPortIndex = currentPortIndex + 1
    const nextPortMatch = document.querySelector(`[data-port-Index = '${nextPortIndex}']`)
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

    if (!nextPortElement) {
      this.renderMessage(`<center>Unlucky!</center>`)
    } else {

      this.sailing = true
      this.renderMessage(`<center>Next stop ${ship.itinerary.ports[nextPortIndex].name}</center>`)
      
      const shipElement = document.querySelector("#ship")

      const sailInterval = setInterval(() => {
        let shipLeft = parseInt(shipElement.style.left, 10)
        if (shipLeft > (nextPortMatch.offsetLeft - 24)) {
          shipLeft = nextPortMatch.offsetLeft - 24
          ship.setSail()
          ship.dock()
          clearInterval(sailInterval)

          this.renderMessage(`<center>Welcome to ${ship.itinerary.ports[nextPortIndex].name}</center>`)
          this.sailing = false
        }

        shipElement.style.left = `${shipLeft + 1}px`
      }, 20)
    }
  }

  Controller.prototype.renderMessage = function(message) {
    let newMessage = document.createElement("div");
    newMessage.id = "message"
    document.querySelector("#viewport").appendChild(newMessage)

    newMessage.innerHTML = message

    const messageTimeout = setTimeout(() => {
      document.querySelector("#viewport").removeChild(document.querySelector("#message"))
    }, 2000)
  }



  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}())
