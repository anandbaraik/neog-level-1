// Write a function that takes an array and returns all the numbers in a new array increased by 10.

const increaseByTen = (arr) => {
  let newArr = arr.map((num) => num + 10);
  return newArr;
}

console.log(increaseByTen([1, 2, 3, 4, 5]));


// write a function to calculate factorial of number using loop
const getSumOfFacts = (...nums) => {
  let fact = 0;
  for (num of nums) {
    let temp = 1;
    for (let i = 1; i <= num; i++) {
      temp *= i;
    }
    fact = fact + temp;
  }
  return fact;
}

console.log(getSumOfFacts(1, 2, 3)) // output: 9

// Write a function to calculate sum of n elements where n >=2

const sumOfN = (...nums) => {
  return nums.reduce((num, sum) => {
    return sum + num;
  }, 0)
}
console.log(sumOfN(1, 2, 3)) // output: 6
console.log(sumOfN(1, 2, 3, 4)) // output: 10

// write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

const getOutput = (arr) => {
  let maxNum = -Infinity;
  let minNum = Infinity;
  let avg = 0;
  let totalNum = 0;
  let sum = 0;
  for (let num of arr) {
    if (num > maxNum) maxNum = num;
    if (num < minNum) minNum = num;
    totalNum += 1;
    sum += num;
  }
  return {
    max: maxNum,
    min: minNum,
    avg: sum / totalNum
  }
}

console.log(getOutput([1, 2, 3, 4, 5])) // output : {max: 5, min: 1, avg: 3}


// write a function getArea which will accept either one or two arguments and return the area of geometrical figure.

// if function is called with one arguments then consider it as side of square
// and
// if it is called with two arguments then consider it as length and breadth of rectangle

const getArea = (a, b) => {
  if (a && !b) {
    return a * a; //side*side
  }

  if (a && b) {
    return a * b; //length*breadth
  }
}
console.log(getArea(4)) // output : 16
console.log(getArea(4, 8)) // output : 32

// Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

const multiplyBytenAndThirty = (arr) => {
  return arr.map((num) => {
    return (num % 2 == 0) ? (num * 20) : (num * 30)
  })
}

console.log(multiplyBytenAndThirty([1, 2, 3, 4, 5]));

// Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

const obj = {
  name: 'Ankit Singhania',
  school: {
    board: ['ISC'],
    marks: [{
      subject: 'Math',
      percent: 99
    },
    {
      subject: 'Computer',
      percent: 96
    }]
  }
}
const printSentance = (obj) => {
  let { name, school: { board, marks: [{ subject: subj1, percent: percent1 }, { subject: subj2, percent: percent2 }] } } = obj;
  return `My name is ${name}. I scored ${percent1} in ${subj1} and ${percent2} in ${subj2} from ${board} board.`;
}

console.log(printSentance(obj));

// Write a function that takes an array and returns a new array having
// even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

const newArr = (arr) => {
  return arr.map((num, index, arr) => {
    return (index % 2 == 0) ? (num - 2) : (num + 3);
  })
}

console.log(newArr([1, 2, 3, 4, 5])); //0:1,1:2,2:3,3:4,4:5

// Write a program using destructing to find a number in this object which is divisible both by 3 and 5
const obj = {
  a: 10,
  b: 12,
  arr: [10, 8, 15, 14]
}

const checkDivisiblity = ({ a, b, arr }) => {
  let nums = [...arr, a, b];
  for (let num of nums) {
    if ((num % 3 == 0) && (num % 5 == 0)) return num;
  }
}

console.log(checkDivisiblity(obj));

// Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.
const numbers = [10, 2, 7, 14, 5];

const getTheDiff = (arr) => {
  let obj = arr.reduce((acc, curr) => {
    return {
      min: Math.min(acc.min, curr),
      max: Math.max(acc.max, curr),
    }
  }, { min: Infinity, max: -Infinity });

  return obj.max - obj.min;
}

console.log(getTheDiff(numbers));// Output: 12

// Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.
const strings = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];


const getStringFreq = (arr) => {
  let obj = arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr] = ++acc[curr]
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let strFreqArr = [];
  for (let str in obj) {
    strFreqArr.push({ string: str, frequency: obj[str] });
  }

  return strFreqArr;
}
// Output: [{ string: 'apple', frequency: 2 }, { string: 'banana', frequency: 1 }, { string: 'cherry', frequency: 3 }]

// Given an array of strings, write a function that returns an object representing the frequency of each character in the array. The keys of the object should be the characters themselves, and the values should be the number of times the character appears in the array.

const getFreqOfChar = strings => strings.reduce((acc, cur) => {
  for (let i = 0; i < cur.length; i++) {
    if (acc[cur[i]]) {
      acc[cur[i]] += 1;
    } else {
      acc[cur[i]] = 1;
    }
  }
  return acc;
}, {})

const strings = ['apple', 'banana', 'cherry'];
console.log(getFreqOfChar(strings));
// Output: { a: 4, p: 2, l: 1, e: 2, b: 1, n: 2, c: 1, h: 1, r: 2, y: 1}

// Given two objects, one with the actual data and the other one with a mapping for the keys to be renamed, write a function to rename the keys of the data object.
const data = {
  first_name: "John",
  last_name: "doe"
}

const keysMap = {
  first_name: "firstName",
  last_name: "lastName"
}

const getDataWithReplacedKeys = (data, keysMap) => {
  return Object.keys(data).reduce((acc, curr) => {
    acc[keysMap[curr]] = data[curr];
    return acc;
  }, {})
}
console.log(getDataWithReplacedKeys(data, keysMap));

// Given an array of objects representing employees, where each object has a name property, a department property, and a salary property, write a function that returns an object representing the total salary of each department. The keys of the object should be the department names, and the values should be the total salaries of all employees in that department.

const employees = [
  { name: 'Alice', department: 'Sales', salary: 50000 },
  { name: 'Bob', department: 'Sales', salary: 60000 },
  { name: 'Charlie', department: 'Marketing', salary: 55000 },
  { name: 'David', department: 'Sales', salary: 70000 },
  { name: 'Eve', department: 'Marketing', salary: 65000 },
];

const getSalaryDepartmentWise = (employees) => {
  return employees.reduce((acc, { department, salary }) => {
    if (acc.hasOwnProperty(department)) {
      acc[department] = acc[department] + salary;
    } else {
      acc[department] = salary;
    }
    return acc;
  }, {});
}
console.log(getSalaryDepartmentWise(employees))
// Output: {Sales: 180000, Marketing: 120000}

// Given an array of objects representing books, where each object has a title property and a year property, write a function that returns the titles of all books published before the year 2000, sorted alphabetically.
const books = [
  { title: 'The Great Gatsby', year: 1925 },
  { title: 'To Kill a Mockingbird', year: 1960 },
  { title: 'One Hundred Years of Solitude', year: 1967 },
  { title: 'The Catcher in the Rye', year: 1951 },
  { title: 'Beloved', year: 1987 },
  { title: 'Brave New World', year: 1932 },
];

const getBooks = (books) => {
  return books.reduce((acc, { title, year }) => {
    if (year < 2000) {
      acc = [...acc, title];
    }
    return acc;
  }, []).sort();
}
console.log(getBooks(books));
// Output: ["Beloved", "Brave New World", "One Hundred Years of Solitude", "The Catcher in the Rye", "The Great Gatsby", "To Kill a Mockingbird"]

// Given an array of objects representing people, use the reduce function to find the average age of all the people.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 40 }
];

const getAverage = (people) => {
  let totalAge = people.reduce((acc, { age }) => {
    return acc + age;
  }, 0);
  return totalAge / people.length;
}

console.log(getAverage(people));

// Given an array of objects representing students, where each object has a name property and a grades property (an array of numbers), write a function that returns an array of objects representing the students who have an average grade of at least 90.

const students = [
  { name: 'Alice', grades: [90, 95, 92] },
  { name: 'Bob', grades: [80, 85, 87] },
  { name: 'Charlie', grades: [92, 88, 94] },
  { name: 'David', grades: [75, 80, 82] },
];

const getStudents = (students) => {
  return students.reduce((acc, curr) => {
    let gradeSum = curr.grades.reduce((acc, grade) => acc + grade, 0);
    let avgGrade = gradeSum / curr.grades.length;
    if (avgGrade >= 90) {
      let student = {
        name: curr.name,
        averageGrade: avgGrade
      }
      acc.push(student);
    }
    return acc;
  }, []);
}
console.log(getStudents(students));
// Output: [{ name: 'Alice', averageGrade: 92.33333333333333 }, { name: 'Charlie', averageGrade: 91.33333333333333 }]

// Given an array of voters, objects count how many people voted using reduce

var voters = [
  { name: 'Bob', age: 21, voted: true },
  { name: 'Jake', age: 20, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 20, voted: true },
  { name: 'Tami', age: 25, voted: true },
  { name: 'Mary', age: 21, voted: false },
  { name: 'Becky', age: 20, voted: false },
  { name: 'Joey', age: 21, voted: true },
  { name: 'Jeff', age: 20, voted: true },
  { name: 'Zack', age: 40, voted: false }
];

let votesCountByAge = (voters) => {
  let votesObj = voters.reduce((acc, { age, voted }) => {
    if (voted && acc.hasOwnProperty(age)) {
      acc[age] = ++acc[age];
    } else if (voted && !acc.hasOwnProperty(age)) {
      acc[age] = 1;
    }
    return acc;
  }, {});
  let votesCount = [];
  for (let age in votesObj) {
    votesCount.push({ age: age, count: votesObj[age] });
  }
  return votesCount;
}
console.log(votesCountByAge(voters));
// [ {age: 21, count: 3}, {age: 20, count: 3}, {age: 25, count: 1} ]

const orders = [
  { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
  { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
  { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
];

const getProfit = (orders) => {
  return orders.reduce((acc, { items }) => {
    return acc + (items.length * 10); //items.length beacuse each item cost $10
  }, 0);
}

console.log(getProfit(orders)); //90

// Write a function that uses reduce to find the user who has the most number of friends.

const users = [
  { id: 1, name: 'Alice', friends: ["Bob", "Charlie", "David"] },
  { id: 2, name: 'Bob', friends: ["Alice", "Charlie", "Eve"] },
  { id: 3, name: 'Charlie', friends: ["Alice", "Bob", "David", "Eve"] },
  { id: 4, name: 'David', friends: ["Alice", "Charlie"] },
  { id: 5, name: 'Eve', friends: ["Bob", "Charlie"] },
]
const getUser = (users) => {
  return users.reduce((acc, curr) => acc.friends.length > curr.friends.length ? acc : curr, users[0]);
}

console.log(getUser(users)); //{ id: 3, name: 'Charlie', friends: [ 'Alice', 'Bob', 'David', 'Eve' ] }

// Write a function that uses reduce to calculate the total revenue generated by the store from all the orders. Assume that the revenue from each order is the sum of the prices of all the items in the order.

const orders = [
  { id: 1, items: [{ name: 'book', price: 10 }, { name: 'pen', price: 2 }] },
  { id: 2, items: [{ name: 'shirt', price: 20 }, { name: 'pants', price: 30 }] },
  { id: 3, items: [{ name: 'hat', price: 15 }, { name: 'socks', price: 5 }] },
];

const getRevenue = (orders) => {
  return orders.reduce((acc, { items }) => {
    let profitFromEachTable = items.reduce((acc, { price }) => acc + price, 0);
    return acc + profitFromEachTable;
  }, 0);
}

console.log(getRevenue(orders)); //82

// Write a function that uses reduce to calculate the total revenue generated by the company from all the sales. Assume that the revenue from each sale is the product of the amount and price.
const sales = [
  { product: 'apple', amount: 100, price: 1 },
  { product: 'banana', amount: 200, price: 0.5 },
  { product: 'orange', amount: 300, price: 0.75 },
  { product: 'grape', amount: 400, price: 0.4 },
];

const getRevenue = (sales) => {
  return sales.reduce((acc, {amount, price}) => acc + (amount * price), 0);
}
console.log(getRevenue(sales)); //585

// Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders.
const foodPrices = {
  burger: 50,
  fries: 30,
  soda: 8,
  pizza: 60,
  salad: 10,
  water: 2,
  sandwich: 30,
  soup: 10,
  coffee: 100
  }
  const orders = [
    { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
    { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
    { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
  ];

  const getTotalAmountOfMoneyEarned = (listOfOrders) =>
    listOfOrders
        .reduce((acc, { items }) => [...acc, ...items], [])
        .reduce((acc, curr) => acc + foodPrices[curr], 0);

  const earnings = (foodPrices, orders) => orders.reduce((acc, { items }) => {
    items.forEach(item => acc += foodPrices[item]);
    return acc;
  }, 0);

  // Alternate method
  const earnings2 = (foodPrices, orders) => orders.reduce((acc, { items }) => [...acc, ...items], []).reduce((acc, curr) => acc += foodPrices[curr], 0);