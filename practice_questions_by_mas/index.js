// Given an array of strings, use the reduce function to convert it to snake case string

const strings = ['hello', 'world', 'how', 'are', 'you'];

const getString = (str) => {
  return str.reduce((acc, currentVal) => acc+"_"+currentVal);
}

console.log(getString(strings)); // output: hello_world_how_are_you

// How can you use the reduce method to sum up all the elements in an array of numbers?

let arr = [5, 10, 15, 20, 25];

let sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum);