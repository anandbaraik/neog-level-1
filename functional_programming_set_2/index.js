// Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
  ];

  const names = people.map(({name}) => name);

  console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

// Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];

const multiplyByFive = (arr) => {
  return arr.map(num => num * 5);
}

console.log(multiplyByFive(numbers)); // Output: [5, 10, 15, 20]

// Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.


const employeeData = [
	{name: "ram", dept: "marketer"},
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

const greetEmployeeMessages = (data) => {
  return data.map(({name, dept}) => `Hi ${name} we are glad to have you as a ${dept}`);
}

console.log(greetEmployeeMessages(employeeData));
// Output: ['Hi ram we are glad to have you as a marketer','Hi Radha we are glad to have you as a SDE','Hi shyam we are glad to have you as a finance professional']

// Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.


const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];

  const getBookTitles = (books) => {
    return books.map(({title}) => title);
  }

  const titles = getBookTitles(books);
  console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

  // Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const studentNames = (students) => {
  return students.filter((student) => {
      if(student.charAt(0) == "A") {
        return student;
      }
  });
}

console.log(studentNames(studentName));
// Output: ["Anjali", "Arpit", "Ankit"]

// Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
]

const getProducts = (products) => {
return products.filter(({price}) => price > 40);
}

console.log(getProducts(productData, 40))
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

// Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];

const isDivisibleBy7 = (numbers) => {
  return numbers.find((number) => number % 7 == 0);
}

console.log(isDivisibleBy7(numbers))
// Output: 21

// Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.


const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

const isNamesGreaterThan8 = (names) => {
  return names.filter((name) => name.length > 8);
}

console.log(isNamesGreaterThan8(names));
// Output: ["Geetanjali", "Bhanu Kumar", "Ramakrishnan"]

// Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
  ];

  const findStudentWithGradeA = (students) => {
    return students.find(({grade}) => grade == "A");
  }

  const studentWithGradeA = findStudentWithGradeA(students);
  console.log(studentWithGradeA);
  // Output: { name: "Mary", grade: "A" }

  // Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.


const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
  ];

  const findStudent = (students) => {
    return students.find(({grade, scholarship}) => grade == "A" || scholarship)
  }

  const student = findStudent(students);
  console.log(student);
  // Output: { name: "Mary", grade: "B", scholarship: true }


  // Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
  ];

  const findStudent = (students) => {
    return students.find(({grade, scholarship}) => grade == "B" && scholarship)
  }

  const student = findStudent(students);
  console.log(student);
  // Output: { name: "Sarah", grade: "B", scholarship: true }

  // Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movies that were made before 1970 and has a rating above 8.0. (Question Level: tough)

const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
  ];

  const getBestOldBollywoodMovies = (movies) => {
    return movies.filter(({year, rating}) => {
      return (year > 1970) && (rating > 8.0);
    }).map(({title}) => title);
  }

  const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
  console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']

  // Write a function that takes an array of arrays as input and uses the reduce method to flatten the array into a single array. For example,
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenArr = (arr) => {
  return arr.reduce((acc, curr, index, arr) => {
    return [...acc, ...curr]
  }, []);
}

console.log(flattenArr(arr));// [1, 2, 3, 4, 5, 6]