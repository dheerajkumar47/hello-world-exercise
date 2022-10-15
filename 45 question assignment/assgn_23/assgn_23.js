let car = 'subaru';
// test for equality
console.log(car === 'subaru');
// test using lower case function
console.log(car.toLowerCase() === 'subaru');
// numerical tests involving equality, greater than, less than
console.log(1 === 1);
console.log(1 > 1);
console.log(1 < 1);
// test for inequality
console.log(1 !== 1);
// test for greater than or equal to
console.log(1 >= 1);
// or and and operators
console.log(1 === 1 && 2 === 2);
console.log(1 === 1 || 2 === 2);
// test whether an item is in an array or not
const things = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
]
console.log(things.includes({ name: 'Bike', price: 100 }));
// test whether an item is not in an array
console.log(!things.includes({ name: 'Bike', price: 100 }));