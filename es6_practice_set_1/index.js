// Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleToVote = (num) =>
  num >= 18 ? `${num} : Eligible to vote` : `${num} : Not eligible to vote`;
console.log(isEligibleToVote(20)); // Eligible to vote
console.log(isEligibleToVote(18)); // Eligible to vote
console.log(isEligibleToVote(17)); // Not eligible to vote

//Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = (num) =>
  num > 0 ? `${num} : Positive Number` : `${num} : Negative Number`;
console.log(checkNum(9)); // Positive Number
console.log(checkNum(-8)); // Negative Number
console.log(checkNum(22)); // Positive Number

// Write a function that takes two numbers as input and determines which one is greater.
const isGreater = (num1, num2) =>
  num1 > num2
    ? `${num1} is greater than ${num2}`
    : `${num2} is greater than ${num1}`;
console.log(isGreater(2, 5)); // 5 is greater than 2
console.log(isGreater(10, 5)); // 10 is greater than 5

// Write a function that takes a number as input and determines if it is even or odd.
// Your ES6 code here

const isEvenOdd = (num) =>
  num % 2 === 0 ? `${num} : Even Number` : `${num} : odd Number`;
console.log(isEvenOdd(5)); // Odd Number
console.log(isEvenOdd(8)); // Even Number
console.log(isEvenOdd(10)); // Even Number

//Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
const checkForAlphabetA = (word) =>
  word.includes("a") ? `${word}: Includes a` : `${word}: Does not include a`;

console.log(checkForAlphabetA("Tanay")); // Includes a
console.log(checkForAlphabetA("Jeep")); // Does not include a
console.log(checkForAlphabetA("Jane")); // Includes a

// Write a function that takes a string as input and determines if it is longer than 5 characters.
const checkLength = (word) =>
  word.length
    ? `${word} : more than 5 characters`
    : `${word} : less than 5 characters`;
console.clear();
console.log(checkLength("Programming")); // more than 5 characters
console.log(checkLength("Jeep")); // less than 5 characters

//Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = (num) => num > 1 && num < 10;

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false

// Write a function that takes a string as input and determines if it contains the word "hello".
const isHelloPresent = (word) => word.toLowerCase().includes("hello");

console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false

// Convert the given function into ES6 with least amount of characters.
const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120

// Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
// Your ES6 code here
let [a, b, c] = numbers;

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

// Write a function that takes a number as input and determines if it is a multiple of 3.
const isMultipleOfThree = (num) => num % 3 === 0;

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true

// Write a function which takes in a number as input and returns it after multiplying by 10.
const multiplyByTen = (num) => num * 10;

console.log(multiplyByTen(20)); // 200
console.log(multiplyByTen(40)); // 400

// Console individual values of the product object using object destructuring.
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple"
};

const { title, price, description } = product;

console.log(title); // iPhone
console.log(price); // 999
console.log(description); // The iPhone is a smartphone developed by Apple

//Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.
const getBookDetails = ({ title, author, pages }) => pages > 100;

let book = {
  title: "I too had a love story!",
  author: "Ravinder singh",
  pages: 250
};

let book2 = {
  title: "I too had a love story!",
  author: "Ravinder singh",
  pages: 100
};
console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
console.log(getBookDetails(book2)); // logs 'false' if the pages are 100 or below

//Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.
console.clear();

const changeOccupation = (person, newOccupation) =>
  (person.occupation = newOccupation);

let person = {
  name: "Amit",
  age: 25,
  occupation: "Software Engineer"
};

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console
