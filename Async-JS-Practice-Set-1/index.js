 // Write a function delay that takes a callback and a delay time as arguments and executes the callback after the specified delay

 const delay = (cb, time) => {
    console.log(cb);
     setTimeout(() => {
       cb();
     }, time);
   }

   console.log(delay(() => console.log('what??'), 1000));

   function delay2(cb, time) {
    const startTime = Date.now();
    const endTime = startTime + time;
    while (Date.now() < endTime) {
      //execute
    }
    cb();
  }

  delay2(() => console.log('Delayed again'), 3000);

  // Write a function repeat that takes a callback and a delay time as arguments and repeatedly executes the callback with the specified delay.

  const repeat = (cb, time) => {
    const timerId = setInterval(cb, time);
    setTimeout(() => {
      clearInterval(timerId);
    }, 5000);
  }

  console.log(repeat(() => console.log('here!'), 1000));

  // Write a function countdown that takes a number as an argument and logs the numbers from the argument down to 0, with a delay of 1 second between each number.

const countdown = (num) => {
    const timerId = setInterval(() => {
      if(num == 0) clearInterval(timerId);
      console.log(num);
      --num;
    }, 1000);
  }

  console.log(countdown(5));

  // Write a function poll that takes a callback function and a delay time as arguments and executes the callback function repeatedly with the specified delay time until the callback function returns a truthy value.

const poll = (cb, delay) => {
    let counter = 0;
    let timerid = setInterval(() => {
        let isReturnedTrue = cb(counter);
        if(isReturnedTrue) clearInterval(timerid);
        ++counter;
    }, delay);
  }
  const logSomething = (counter) => {
    if(counter == 5) return true;
    console.log('hello');
  }
  poll(logSomething, 1000);

  // Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedGreeting = (msg, delayTime) => {
  setTimeout(() => {
    console.log(msg);
  }, delayTime);
}

delayedGreeting('Hello, welcome to my portfolio!', 2000);
// Hello, welcome to my portfolio!

// Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedAddition = (a, b) => {
  setTimeout(() => {
    console.log(a+b);
  }, 4000)
}

delayedAddition(2, 3);
// 5