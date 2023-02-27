function sum(a,b) {
    console.log(a,b)
 }
 sum(1,2,3,4) //1, 2


 function sum(a,...b, c) {
    console.log(a,b,c)
 }

 sum(1,2,3,4) //error : Rest parameter must be last formal parameter

 function sum(a,...b) {
    console.log(a,b);
 }

 sum(1,2,3,4)//1, [2,3,4]

 function sum(arr) {
    const [a,,,b] = arr;
     console.log(a,b)
  }

  sum([1,2,3,4]) //1, 4

  function sum(arr) {
    const arr1 = [...arr];
    arr[4] = 5
     console.log(arr, arr1)
  }

  sum([1,2,3,4]) //[1,2,3,4,5], [1,2,3,4]

console.log(a) //undefined
console.log(b) //ReferenceError: Cannot access 'b' before initialization
var a=10;
let b=20;

console.log(a) //undefined
// console.log(b) //ReferenceError: Cannot access 'b' before initialization
{
console.log(b)//ReferenceError: Cannot access 'b' before initialization
var a=10;
let b=15
}

console.log(a); //ReferenceError: a is not defined
function sum(){
var a=10;
}
sum()

var num = 8;
var num = 10;
console.log(num); //10


var a = 10;
var b = a;
b = 20;
console.log(a);//10
console.log(b);//20

var x = 10;

if (x === 10) {
  var x = 20;
  console.log(x); //20
}
console.log(x); //20

console.log(a) //ReferenceError: a is not defined
let b =30;
function sum(){
    var a=10;
    console.log(b)//30
    function sub(){
        console.log(c);//undefined
        console.log(d);//ReferenceError: Cannot access 'd' before initialization
        console.log(e);//40
        var c=10;
      let d=30;
    }
    var e = 40;
    sub();
}
sum();

let x = 10;
function foo() {
  console.log(x); //10
}
function bar() {
  let x = 20;
  foo();
}
bar();

let x = 10;
let y = 20;
function foo() {
  let x = y = 30;
}
foo();
console.log(x, y);//10, 30


// What will be the output of the following consoles ?

const [x = 2, y = 4, z = 6] = [10];

console.log(x); //10
console.log(y); //4
console.log(z); //6

const obj = {
    name: "Ram",
    age: 21,
}

const {name: myName} = obj;
console.log(myName) //Ram

const obj = {
    country: "India",
    playerDetails: {
        name: "Virat",
        age: 33
},
}

const {playerDetails: {age: myAge=30, position: myPosition=3}}= obj
console.log(myAge, myPosition); //33, 3

const obj = { 'firstName': 'Elon', 'lastName': 'Musk' };
const country = 'USA';
const newObj = { ...obj, country, companies: ['Paypal', 'Tesla', 'SpaceX'] };
console.log(newObj);
/*
* {
  firstName: 'Elon',
  lastName: 'Musk',
  country: 'USA',
  companies: [ 'Paypal', 'Tesla', 'SpaceX' ]
}
*/