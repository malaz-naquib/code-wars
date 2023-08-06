// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let arrZero = arr.filter((n) => n === 0);
  let arrRemain = arr.filter((n) => n !== 0);
  return arrRemain.concat(arrZero); 
}