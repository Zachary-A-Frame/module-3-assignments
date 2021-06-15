// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// Initializing our 
let intervalId;

const countDown = (num) => {
  let interval = num;
  intervalId = setInterval(function () {
    console.log(interval);
    interval--;
    if (interval === 0) {
      console.log("DONE!");
      clearInterval(intervalId);
    }
  }, 1000);
};

countDown(10);
