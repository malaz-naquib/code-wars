// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
    let obj = {};
    string.split('').forEach(function(a) {
      obj [a] ? obj [a]++ : obj [a] = 1;
    });
    return obj;
}
  
// OR: 
  
// const count = s => require('lodash').countBy(s) 