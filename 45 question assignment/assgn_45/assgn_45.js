
const make_car = (make, model, ...options) => {
    let car = {
        make: make,
        model: model
    };
    if (options.length > 0) {
        options.forEach(option => {
            car[option] = true;
        });
    }
    return car;
}
const car_1 = make_car("Toyota", "Corolla", "sunroof", "automatic");
const car_2 = make_car("Honda", "Civic", "sunroof", "automatic", "leather");
const car_3 = make_car("Honda", "Civic", "sunroof", "automatic");
const car_4 = make_car("Honda", "Civic", "sunroof");
const car_5 = make_car("Honda", "Civic");
console.log(car_1);
console.log(car_2);
console.log(car_3);
console.log(car_4);
console.log(car_5);