// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string){
    let breakCamel = string.split('');
    for(let i = 0; i < breakCamel.length; i++){
      if(breakCamel[i] >= 'A' && breakCamel[i] <= 'Z'){
        breakCamel[i] = " " + breakCamel[i];
      }
    }
    return breakCamel.join('');
};