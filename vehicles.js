class Vehicle {
  constructor (make, model) {
    this.make = make
    this.model = model
  }
}

const car = new Vehicle('Toyota', 'Camery')
const truck = new Vehicle('GMC', 'Sierra')
const van = new Vehicle('Toyota', 'RAV4')

console.log(car, truck, van) 