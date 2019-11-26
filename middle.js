function assertArraysEqual(arr1, arr2) {
  
  let note = true;
  
  if (arr1.length !== arr2.length) {
    note = false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      note = false;
    }
  }
  if (note === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

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

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, "java", 4, 5]), ["java"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);