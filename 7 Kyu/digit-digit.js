// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
// First, let's create a variable and use it to convert any integers passed through our function into a string.
    let numString = "" + num;
// Next, let's create an array of each item in the string using the .split() method.
    let newNum = new Array();
// Also, we'll use the .map() method to square each item in the array and the .push() method to place it at the end of our created array.
    numString.split("").map(n => {
        newNum.push(n**2);
    })
// Lastly, we'll use the .join() method to merge our new array. Additionally, we'll be converting the string returned by our .join() to an integer.
    return parseInt(newNum.join(""));
}