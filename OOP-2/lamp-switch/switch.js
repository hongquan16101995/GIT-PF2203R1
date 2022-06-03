class SwitchButton {
    status
    lamp

    constructor() {
        this.status = false
    }

    connectToLamp(lamp) {
        this.lamp = lamp
    }

    turnOn() {
        this.status = true
        if (this.lamp !== undefined) {
            this.lamp.turnOn()
        }
        
    }

    turnOff() {
        this.status = false
        if (this.lamp !== undefined) {
            this.lamp.turnOff()
        }
    }
}