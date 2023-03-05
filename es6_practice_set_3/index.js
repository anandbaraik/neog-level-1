// Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.


// Your ES6 code here

const formatArray = (strs) => {
  return `The array has ${strs.length} items, and the first item is ${strs[0]}, and the last item is ${strs[strs.length - 1]}.`;
}

const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".

// Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.
// Your ES6 code here

const formatProduct = ({name, price, inStock}) => {
  return `${name} costs INR ${price} ${inStock ? 'and is in stock.' : '.'}`;
}


const product = {
  name: 'Socks',
  price: 249,
  inStock: true,
};

const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.

// Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.
// Your ES6 code here
const findPerson = (persons, name) => {
  for(let person of persons) {
    if(person.name == name) return person;
  }
}


console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))

// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// Your ES6 code here

const pickFirstAndSecond = ([a, b ,c]) => {
  return {
    first: a,
    second: b
  }
}

console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}

// Convert the following code to ES6+ syntax with minimum number of characters.
function startsWithA(str) {
  if(str.charAt(0) === 'A') {
		return true;
	} else {
		return false
	}
}

const startsWithA = (str) => str.charAt(0) === 'A'

console.log(startsWithA("Akshita"))
// true
console.log(startsWithA("Jeena"))
// false

// Write an ES6 function to return only the first character of the given array.
// Your ES6 code here

const printFirstCharacter = (arr) => arr[0];

console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1

// Write a function to return the last 5 characters as an array from the given array.
// Your ES6 code here

const printLastFive = (arr) => {
  const arr1 = [];
  let j = 0;
  for (let i = arr.length - 5; i < arr.length; i++) {
      arr1[j] = arr[i];
      j++;
  }
  return arr1;
};

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]

// Write an ES6 function to return the second element of the given array by multiplying 20 to it.
// Your ES6 code here

const printSecondCharacter = ([,a,...b]) => a * 20;

console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40

// Write an ES6 function to return the second element of the given array by adding “Hello” before it.
// Your ES6 code here

const sayHello = ([,a,...b]) => `Hello ${a}`;

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh

// Write an ES6 function to return sum of all numbers at even indices of the given array.
// Your ES6 code here
const sumOfEvenIndices = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length ; i++) {
    if(i % 2 == 0) sum += arr[i];
  }
  return sum;
}


console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30

// Write an ES6 function to return the sum of only first 2 elements of the array .
// Your ES6 code here
const sumFirstTwoElements = ([a, b]) => a + b;


console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26

// Write an ES6 function to return the first element which is a multiple of 5 in the given array.
// Your ES6 code here
const printMultipleOfFive = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 5 == 0) return arr[i];
  }
}


console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5

// Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.
// Your ES6 code here

const getAddress = ({postalCode, city}) => ({postalCode, city});


const userData = {
  name: 'Jane Doy',
  postalCode: '12134',
  city: 'Germany',
}

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

// Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.
// Your ES6 code here


const printData = ({ name, country }) => `${name} lives in ${country}`;

const userData1 = {
  name: 'Gaurav',
  postalCode: '12134',
  country: 'Japan',
}
console.log(printData(userData1)); // Gaurav lives in Japan


const userData2 = {
  name: 'Pritam',
  postalCode: '560223',
  country: 'India',
}
console.log(printData(userData2)); // Pritam lives in India

// Create a function which takes a product object and returns a sentence about the product using ES6 features.

// Your ES6 code here

const printProductDetails = ({ name, specification: { capacity, size } }) => {
  return `${name} which is of ${size}, has a capacity of ${capacity}.`;
}


const product = {
  name: "Apple MacBook Air 2020",
	specification: {
		capacity: "256GB",
	  size: "13.3 Inch"
	},
  price: 82900
}
console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.