// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
//   check if the argument is an even number.
    if(number % 2 === 0) {
//   return "Even" if the argument is divisible by 2.
        return ('Even');
//   otherwise, the argument is odd.
    } else {
//   return "Odd" if the argument is anything but divisible by 2.
        return ('Odd');
    }
};

evenOrOdd (2);