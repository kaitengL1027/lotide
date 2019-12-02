const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let l = array.length;
  let over2 = true;
  let mid = []; 
  let middleIndex = null; 

  if (l <= 2) {
    over2 = false; 
    return mid; 
  }

  if (l % 2 === 0) {
    middleIndex = l / 2;
    for (let i = middleIndex - 1; i <= middleIndex; i++) {
      mid.push(array[i]);
    }
  }
  else {
    middleIndex = Math.floor(l / 2);
    mid.push(array[middleIndex]);
  }

  return mid; 
}

module.exports = middle;