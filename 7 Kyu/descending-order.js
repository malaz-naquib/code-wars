// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    const convNum = n.toString(); // First, use the toString method to convert the argument/array(n), into a string and assign to a new variable.
    const newArr = convNum.split(''); // Then, split the strings in your argument/array(n) using the split method and assign to another variable.
    const sortArr = newArr.sort(); // Next, take the split argument/array(n) and use the sort method. Then assign to yet another variable.
    const revArr = sortArr.reverse(); // Use reverse method on the sorted argument/array(n) and assign to a new variable.
    const joinArr = revArr.join(''); // Use the join method to put your argument/array(n) back together. Then, you guessed it, assign to a new variable.
    const maxMinArr = Number(joinArr); // Finally, wrap the joined argument/array(n) in the number method and assign to assign to a final variable.
    return maxMinArr; // Lastly, return your final variable and behold your beatiful, descending order argument/array(n)! :)
}