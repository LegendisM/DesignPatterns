function Shop() {
    this.construct = (VehicleBuilder)=> {
        VehicleBuilder.step1();
        VehicleBuilder.step2();
        return VehicleBuilder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function () {
        this.car = new Car("Pride",[255,255,255],4);
    }

    this.step2 = function () {
        this.car.ChangePlate("$2GDF^@$3");
    }

    this.get = function () {
        return this.car;
    }
}

function Car(model,color,doors) {
    this.model = model;
    this.color = color;
    this.doors = doors;
    this.plate = "";

    this.ChangePlate = function (plate) {
        this.plate = plate;
    }
}

function Bike(model,color,doors) {
    this.model = model;
    this.color = color;
    this.doors = doors;
    this.plate = "";

    this.ChangePlate = function (plate) {
        this.plate = plate+"@"+new Date().getMilliseconds();
    }
}

function run() {
    const shop = new Shop();
    const carBuilder = new CarBuilder();

    let carA = shop.construct(carBuilder);
    let carb = shop.construct(carBuilder);

    console.log(carA.plate);
    console.log(carb.plate);
}
run();