// Given an array, write an ES6 function that returns the total length of all the strings in an array.
const strings = ["apple", "banana", "cherry", "date", "blueberry"];

const totalLength = (strs) => {
  return strs.reduce((acc, curr) => {
    return acc + curr.length;
  }, 0);
}

console.log(totalLength(strings));
// Output: 30

// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
const numbers = [1, 2, 3, 4, 5];

const sumSquares = (numbers) => {
  return numbers.map((number) => {
    return number * number;
  }).reduce((sum, number) => sum + number)
}

console.log(sumSquares(numbers));
 // Output: 55

//  Write an ES6 function that calculates and returns the total value of all items in an array of objects.
const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];

  const totalValue = (items) => {
    return items.reduce((sum, {price}) => {
      return sum + price;
    }, 0)
  }

  console.log(totalValue(items));
  // Output: 60

//   Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

const concatStrings = (strs) => {
    return strs.reduce((acc, curr) => acc + curr, '');
  }

  console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'

//   Write an ES6 function to multiply and return all the elements of a given array.
const numbers = [1, 2, 3, 4, 5];

const product = (numbers) => {
  return numbers.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
}

console.log(product(numbers));
// Output: 120

// Write an ES6 function that takes an array of strings and returns the longest string.
const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (arr) => {
  return arr.reduce((acc, curr) => {
    return (acc.length > curr.length) ? acc : curr;
  });
}

console.log(longestString(strings));
// Output: 'Haule Haule'

// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
const people = [
    {name: 'Jeena', age: 25},
    {name: 'Priya', age: 30},
    {name: 'Naina', age: 45}
]

const oldestPersonName = (people) => {
let oldPerson =  people.reduce((acc, curr) => {
if(acc.age > curr.age) return acc;
return curr;
}, people[0]);
return oldPerson.name;
}

console.log(oldestPersonName(people));
// Output: 'Naina'

// Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];

  const getAverageAge = (people) => {
    let totalAge = people.reduce((acc, {age}) => {
      return acc + age;
    }, 0);
    return {
      averageAge: totalAge/people.length
    }
  }

  console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }

//   Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.
const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];

  const findMostExpensiveProduct = (products) => {
    return products.reduce((acc, curr) => {
      if(acc.price > curr.price) return acc;
      return curr;
    })
  }

  console.log(findMostExpensiveProduct(products));
  // { name: "Slipper", price: 40, quantity: 3 }

//   Write an ES6 function that takes an array of strings and returns an object with the count of each string.
const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

const countStrings = (fruits) => {
  return fruits.reduce((acc, curr) => {
    let temp = {};
    if(acc.hasOwnProperty(curr)) {
      temp[curr] = acc[curr] + 1;
    } else {
      temp[curr] = 1;
    }
    return {...acc, ...temp};
  },{});
}

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }