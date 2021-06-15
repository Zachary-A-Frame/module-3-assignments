// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

// Initialize a counter, and a variable for our random number.
let counter = 0;
let randomNumber

// Declare our function, randomGame. It requires no parameters to run.
const randomGame = () => {
     // We want to store our intervalID, so we can use clearInterval later. Let's call it numberChecker.
     let numberChecker = setInterval(function () {
          // We don't need to give .random any parameters, as we only want it to give us numbers between 0 and 1.
          randomNumber = Math.random()
          counter++
          // We can use a string template to give us a pretty, easy to read log of what's going on.
          console.log(`Counter: ${counter}, our number is ${randomNumber}`,)
          // We clear our interval if our random number is greater than .75.
          if (randomNumber > 0.75) {
               console.log(`Winner! It took ${counter} number of tries to find a number greater than .75.`)
               clearInterval(numberChecker)
          }
          // We want our function to run every 1 second, or 1000 miliseconds.
     }, 1000)
}

randomGame()