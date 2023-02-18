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