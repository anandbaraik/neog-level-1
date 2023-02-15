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
console.clear();
console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false
