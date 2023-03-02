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
  let {name, school} = obj;
  let {board:[sBoard], marks:[{subject:subj1, percent:percent1}, {subject:subj2, percent:percent2}]} = school;
  return `My name is ${name}. I scored ${percent1} in ${subj1} and ${percent2} in ${subj2} from ${sBoard} board.`;
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