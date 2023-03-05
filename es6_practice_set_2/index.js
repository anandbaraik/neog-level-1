// Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

const getViews = (blog) => blog.views >= 1000;


const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

// Swap the values of two variables using array destructuring.
let a = 1;
let b = 2;
// Your ES6 Code here

[a, b] = [b, a]

console.log(a) // 2
console.log(b) // 1

// Convert this function into ES6 with least amount of characters.
// function add(a = 30, b = 0) {
// 	  return a + b;
// 	}
const add = (a = 30, b = 0) => a + b;
console.log(add(2, 3));

// Write a function that takes two strings as input and concatenates them together.

// Your ES6 code here

const concatenateStrings = (str1, str2) => str1+str2;

console.log(concatenateStrings("hello", "world")); // "helloworld"

// Write a function that takes an array and returns the last element in the array.

// Your ES6 code here

const lastElement = (arr) => arr[arr.length - 1]

console.log(lastElement([1, 2, 3, 4, 5])); // 5

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