// Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// Your ES6 function here

const incrementNumbers = (nums) => {
    return nums.map((num) => num+3)
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log(incrementNumbers(numbers));
  // Output: [4, 5, 6, 7, 8]


//   Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

// Your ES6 function here

const capitalizeArray = (arr) => {
    return arr.map((word) => word.toUpperCase());
  }

  const myArray = ['apple', 'banana', 'cherry'];
  console.log(capitalizeArray(myArray));
  // Output: ["APPLE", "BANANA", "CHERRY"]