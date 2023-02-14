// block scope & functional scope
if(true) {
	let a = 2; //let has block scope so attempting to access a outside of the block will result in a ReferenceError.
	 var b = 2; //function scope
}
console.log(b);
// console.log(a) //ReferenceError: a is not defined

let c = 42;
{
	let c = 100; //re-initialized & it has block scope so it dont have any affect on outer variable
    console.log('inside block', c);
}
console.log('outside block', c); // reinitialzed the variable

let d = 42;
{
	d = 100; //we are re-assigning  the  value so it'll affect outer scope
    console.log('inside block', d);
}
console.log('outside block', d); // reinitialzed the variable


let e = 100;
function App() {
	// console.log("1",e); //ReferenceError: Cannot access 'e' before initialization inside the function scope
    let e = 42;
	console.log("2",e); //here e is already defined so no error
	{
		let e = 100;
	}
	console.log("3",e);
}

// App() //bottom to top approach to find out bug

let f = 100; //outside the function which makes it global accessible
function App2() {
    f = 42;
    console.log("1",f); //1, 42
}

// App2();

function something() {
    console.log(a); // variable a is declared within the something function using the let keyword, and it is hoisted to the top of the function scope. However, when console.log(a) is executed, the variable a has not yet been initialized, so it has the value of undefined
    let a = 2;
}

// something()

//hoisting

function something2() {
    // a = undefined
    console.log(a); //a is declared within the something function using the var keyword, which makes it function-scoped. In JavaScript, variables declared with var are hoisted to the top of their scope and are initialized with a value of undefined when they are declared.
    var a = 2;
}

// something2()

// const VS var
const anand = 2;
// anand = 3 //TypeError: Assignment to constant variable. const declarations are read-only and cannot be reassigned

// const with objects
const obj = { a: 1, b:2 } //The const declaration creates a constant reference to the object but does not prevent us from modifying the properties of object
obj.a = 22;
console.log(obj);

const obj2 = { a:3, b:4 }
// obj = obj2 // The const declaration creates a constant reference to the object & attempting to reassign that reference to a different object will thow TypeError

// const with arrays
const array = [1,2,3,4]
array.push(55);
console.log(array);

console.clear();
const array1 = [1,2,3,4]
array = array.push(55); //const declaration of array creates constant reference & attempting to reassign will throw TypeError: Assignment to constant variable.