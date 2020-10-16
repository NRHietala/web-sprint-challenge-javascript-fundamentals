// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Functions have the ability to reach outside of their scope to find variables that they call that they don't find within their own scope. However this is only one way. A function can't reach into an inner function and take a value from there. This is called closure, and you can imagine it creates a little dome from the functoin to the value and it "holds" onto that value and makes it usuable within as it passes throught the "walls" of the brackets into the function scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation (a) {
  let total = 0;
  for(let i = 0; i <= a; i++) {
    total += i;
  }
  return total;
}

console.log(summation(4));