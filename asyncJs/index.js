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