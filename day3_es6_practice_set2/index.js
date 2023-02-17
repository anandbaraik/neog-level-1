// Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

let person = {
    name : 'Anand',
    age : 30
}

console.log(person.age); // Output: 30

person.age = 35;

console.log(person.age); // Output: 35


// Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const isSportsCar = (car) => (car.horsepower >= 300);

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

// Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.

// Your ES6 code here
const isEligible = (person, num) => (person.age + num >= 22)


const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true


// Write an ES6 function combineObjects with least amount of characters which merges two objects into one.
// Your ES6 function here

const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

// Convert the function getData, into an ES6 function with last amount of characters.

function getData(person) {
	let { name, address: { city: address } } = person;
    console.log(name); // John Doe
    console.log(address); // New York
}

const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};
getData(person);