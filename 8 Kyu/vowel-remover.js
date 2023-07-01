// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// With Regex:
function shortcut (string){
  return string.split(/[aeiou]/g).join('');
}

// Without Regex:
function shortcut (string){
  return string.split('').filter(str => !'aeiou'.includes(str)).join('');
}