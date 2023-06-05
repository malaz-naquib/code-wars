// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// First, we'll let create a variable, number, and assign it a function with a parameter of busStops.
let number = function(busStops){
// Next, we'll create another variable, x, and assign it the value of 0.
  let x = 0;
// Now, let's use the forEach function to iterate through our array, busStops. Also, we'll use an arrow function.
  busStops.forEach(a => x = x + a[0] - a[1]);
// Lastly, we'll return our variable, x.
  return x
}