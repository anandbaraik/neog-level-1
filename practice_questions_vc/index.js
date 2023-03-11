// Write a function that takes an array and returns all the numbers in a new array increased by 10.

const increaseByTen = (arr) => {
    let newArr = arr.map((num) => num+10);
    return newArr;
  }

  console.log(increaseByTen([1,2,3,4,5]));


  // write a function to calculate factorial of number using loop
  const getSumOfFacts = (...nums) => {
    let fact = 0;
    for(num of nums) {
      let temp = 1;
      for(let i = 1; i<= num; i++) {
        temp *= i;
      }
      fact = fact+temp;
    }
    return fact;
  }

  console.log(getSumOfFacts(1,2,3)) // output: 9

  // Write a function to calculate sum of n elements where n >=2

  const sumOfN = (...nums) => {
    return nums.reduce((num, sum) => {
      return sum+num;
    }, 0)
  }
  console.log(sumOfN(1,2,3)) // output: 6
  console.log(sumOfN(1,2,3,4)) // output: 10

  // write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

  const getOutput = (arr) => {
    let maxNum = -Infinity;
    let minNum = Infinity;
    let avg = 0;
    let totalNum = 0;
    let sum = 0;
    for(let num of arr) {
      if(num > maxNum) maxNum = num;
      if(num < minNum) minNum = num;
      totalNum += 1;
      sum += num;
    }
    return {
      max: maxNum,
      min: minNum,
      avg: sum/totalNum
    }
  }

   console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}


   // write a function getArea which will accept either one or two arguments and return the area of geometrical figure.

    // if function is called with one arguments then consider it as side of square
    // and
      // if it is called with two arguments then consider it as length and breadth of rectangle

  const getArea = (a, b) => {
    if(a && !b) {
      return a*a; //side*side
    }

    if(a && b) {
      return a*b; //length*breadth
    }
  }
    console.log(getArea(4)) // output : 16
    console.log(getArea(4,8)) // output : 32

    // Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

  const multiplyBytenAndThirty = (arr) => {
    return arr.map((num) => {
      return ( num %2 == 0) ? (num * 20) : (num *30)
    })
  }

  console.log(multiplyBytenAndThirty([1, 2, 3, 4, 5]));

  // Write a arrow function which takes an object and prints the particular sentence
  // My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

  const obj ={
    name: 'Ankit Singhania',
    school: {
        board:['ISC'],
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
    let {name, school:{board, marks:[{subject:subj1, percent:percent1}, {subject:subj2, percent:percent2}]}} = obj;
    return `My name is ${name}. I scored ${percent1} in ${subj1} and ${percent2} in ${subj2} from ${board} board.`;
    }

  console.log(printSentance(obj));

  // Write a function that takes an array and returns a new array having
      // even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

      const newArr = (arr) => {
        return arr.map((num, index, arr) => {
          return (index % 2 == 0) ? (num - 2 ) : (num + 3);
        })
      }

      console.log(newArr([1, 2, 3, 4, 5])); //0:1,1:2,2:3,3:4,4:5

// Write a program using destructing to find a number in this object which is divisible both by 3 and 5
const obj = {
  a: 10,
  b: 12,
  arr: [10, 8, 15, 14]
}

const checkDivisiblity = ({a, b, arr}) => {
  let nums = [...arr, a, b];
  for(let num of nums) {
    if((num % 3 == 0) && (num % 5 == 0)) return num;
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
  }, {min:Infinity, max:-Infinity});

  return obj.max - obj.min;
}

console.log(getTheDiff(numbers));// Output: 12

// Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.
const strings = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];


const getStringFreq = (arr) => {
  let obj =  arr.reduce((acc, curr) => {
      if(acc.hasOwnProperty(curr)) {
        acc[curr] = ++acc[curr]
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

  let strFreqArr = [];
  for(let str in obj) {
    strFreqArr.push({string: str, frequency: obj[str]});
  }

  return strFreqArr;
}
// Output: [{ string: 'apple', frequency: 2 }, { string: 'banana', frequency: 1 }, { string: 'cherry', frequency: 3 }]

// Given an array of strings, write a function that returns an object representing the frequency of each character in the array. The keys of the object should be the characters themselves, and the values should be the number of times the character appears in the array.

const getFreqOfChar = strings => strings.reduce((acc,cur) => {
  for(let i = 0; i < cur.length ; i++) {
    if(acc[cur[i]]) {
      acc[cur[i]] += 1;
    }else {
      acc[cur[i]] = 1;
    }
  }
 return acc;
},{})

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