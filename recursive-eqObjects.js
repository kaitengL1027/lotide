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

// ----EQUAL OBJECTS---------------------------------------------------------------
function recursive_eqObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  
// ----Checks the length of the keys (if obj1 and obj2 have the same amount of keys)
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {

// ----Checks if obj2[key] exists, e.g. obj1 = {a: 1, b: 2, c: 3}; obj2 = {a: 1, b: 2, d: 5}; if (obj2["c"] === undefined)
    if (obj2[key] === undefined) {
      return false;
    }

// ----Checks if obj1[key] is an array, if yes, run the function again recursively, and if eqArrays() returns false, for-
// loop should terminate and return a false. 
    if (!Array.isArray(obj1[key])) {
      if (!recursive_eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    }

// ----Check if 2 arrays are the same using eqArrays
    else {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
  }
  return true;
}



console.log(recursive_eqObjects(
  { c: {g: {l: [9, 10] }}}, 
  { c: {g: {l: [9, 10]}} }
)); // => true

console.log(recursive_eqObjects(
  { c: {g: {l: [9, 10] }}}, 
  { c: {g: {l: [9]}} }
)); // => false

console.log(recursive_eqObjects(
  { a: { y: [0], z: [1] }, b: [2] }, 
  { a: { z: [1] }, b: [2] }
)); // => false

console.log(recursive_eqObjects(
  { a: { y: [0], z: [1] }, b: [2] }, 
  { a: { z: [1] }, b: [2] }
)); // => false