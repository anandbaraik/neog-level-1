// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.
const getMaxElement = (arr) => {
    let maxNum = 0;
    for (let num of arr) {
      if(num > maxNum) maxNum = num;
    }
    return maxNum;
  }

  let array = [4,78,8,3,6,0,12,34]
  console.log(getMaxElement(array)) // 78

// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.
const calculateAverage = (arr) => {
    let sum = 0;
    let totalNum = 0;
    for (let num of arr) {
      sum += num;
      totalNum += 1;
    }
    return sum/totalNum;
  }

  console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

// write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const convertEvenToOdd = (arr) => {
    let oddNums = [];
    let index = 0;
    for (let num of arr) {
      oddNums[index] = (num % 2 == 0) ? num + 1 : num
      index += 1;
    }
    return oddNums;
  }

  var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(convertEvenToOdd(numArr));
  // [1, 3, 3, 5, 5, 7, 7, 9, 9]

  // write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = (arr) => {
    let wordsArr = [];
    let index = 0;
    for (let word of arr) {
      for (let wordIndex in word) {
        if(wordIndex >4) {
          wordsArr[index] = word;
          index += 1;
          break;
        }
      }
    }
    return wordsArr;
  }


  var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
  console.log(filterWords(words)) // ["repeat", "community"]


// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.
//97-122(a-z)
//65-90(A-Z)
const capitalizeWords = (arr) => {
    let capitalizedStr = [];
    let index = 0;
    for (let str of arr) {
      let tempStr = "";
      for (let letterIndex in str) {
        let charCode = str.charCodeAt(letterIndex);
        if((charCode >= 97) && (charCode <= 122)) {
          tempStr += String.fromCharCode(str.charCodeAt(letterIndex) - 32);
        } else {
          tempStr += str[letterIndex];
        }
      }
      capitalizedStr[index] = tempStr;
      index += 1;
    }
    return capitalizedStr;
  }

  console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
  // ["EAT", "SLEEP", "CODE", "REPEAT"]

  // Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (arr, key) => {
    let names = [];
    let index = 0
    for(let obj of arr) {
      if(obj[key]) {
        names[index] = obj[key];
        index += 1;
      }
    }
    return names;
  }

  console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 }
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]

  // Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation = (user) => {
    if(!user.teamId) {
      let teamId = 667543;
      return {...user, teamId};
    }
    return {...user};
  }

  const userData = { firstName : "John", lastName: "Dee" }
  console.log(podAndTeamAllocation(userData))
  // {firstName: 'John', lastName: 'Dee', teamId: 667543}


  // Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.


const checkForTeam = (student) => {
    if(!student.team){
      let team = 'A';
      return {...student, team};
    }
    return {...student};
  }

  console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
  // {firstName: 'Penn', lastName: 'Ma', team: A}

  console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
  // {firstName: 'John', lastName: 'Dee', team: B}

  console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
  // {firstName: 'Priya', lastName: 'Raj', team: A}


  // Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],
    publisher: {name: 'O\'Reilly Media', location: 'CA'}
};

let {title, authors, publisher:{name:publisherName}} = book;
let [authorObj1, authorObj2] = authors;
let {name:author1} = authorObj1;
let {name:author2} = authorObj2;

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

// Write an ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges = (array) => {
    let sumOfAllAges = 0;
    for (let person of array) {
      if(person.age) {
        sumOfAllAges += person.age;
      }
    }
    return sumOfAllAges;
  }

  var array1 = [
      {
          name: "Jay",
          age: 60
      },
      {
          name: "Gloria",
          age: 36
      },
      {
          name: "Manny",
          age: 16
      },
      {
          name: "Joe",
          age: 9
      }
  ];

  console.log(sumOfAges(array1)); // 121