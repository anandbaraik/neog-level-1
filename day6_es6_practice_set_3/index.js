// Write an ES6 function to return only the first character of the given array.

const printFirstCharacter = (arr) => arr[0];

console.log(printFirstCharacter([1, 2, 3, 5, 8]))// 1

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

// Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

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

// Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const getAddress = ({postalCode, city}) => ({postalCode, city});


const userData = {
  name: 'Jane Doy',
  postalCode: '12134',
  city: 'Germany',
}

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

// Write an ES6 function to return the sum of only first 2 elements of the array .

const sumFirstTwoElements = ([a, b]) => a + b;

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26