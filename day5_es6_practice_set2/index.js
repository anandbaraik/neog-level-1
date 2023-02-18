// Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const personInfo = ({ name, age, occupation }) => `${name} is ${age} years old.`;


const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(person1)) // Expected output: "John is 25 years old."
console.log(personInfo(person2)) // Expected output: "Jane is 45 years old."


// Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast = (arr) => (arr[0] + arr[arr.length - 1]);


console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

// Write a function that takes an array and a number and returns the sum of first element and the number.

const sumFirstElement = (arr, num) => (arr[0] + num);

console.log(sumFirstElement([1, 2, 3], 5)); // 6


// Write a function that takes an array and returns the first element of the array.

const firstElement = (arr) => arr[0];

console.log(firstElement([1, 2, 3, 4, 5])); // 1

// Write a function that takes a string as input and returns the string in all uppercase letters.

const stringToUpperCase = (str) => str.toUpperCase();

console.log(stringToUpperCase("hello")); // "HELLO"