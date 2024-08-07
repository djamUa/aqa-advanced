class Car {

    // color = 'blue';
    liters = 100;
    constructor(color, liters,brand) {

    }

    turnOn() {
        console.log('Car is turn on');
    }

        turnOff() { 
            console.log('Car is turn off');
        }
        fillPatrol(liters) {
            console.log (`${liters} liters of Petrol in car`)
        }
}

const bmw = new Car();

bmw.turnOn();
bmw.turnOff();
bmw.fillPatrol();