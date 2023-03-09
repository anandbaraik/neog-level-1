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

// Given an array of voters, objects count how many people voted using reduce

var voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let votersCount = (voters) => {
  return voters.reduce((acc, {voted}) => {
    return acc + (voted ? 1 : 0);
  }, 0)
}
console.log(votersCount(voters));

// Write a program to find out the maximum and minimum number in an array by using only one reduce method

Input = [3,5,6,1,14]

const findMinMax = (arr) => {
  return arr.reduce((acc, curr) => {
    let min = (acc.min > curr) ? curr : acc.min;
    let max = (acc.max < curr) ? curr : acc.max;
    return {
      min: min,
      max: max
    }
  }, {min:Infinity, max: -Infinity});
}

console.log(findMinMax(Input)); //{min:1, max: 14}