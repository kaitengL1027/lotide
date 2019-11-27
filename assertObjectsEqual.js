const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

function eqObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let tf = false; 
  
  if (keys1.length !== keys2.length) {
    tf = false;
    console.log(tf)
    return tf; 
  }
  
  for (let item of keys1) {
    if (Array.isArray(obj1[item]) === true && Array.isArray(obj2[item]) === true) {
      if (eqArrays(obj1[item], obj2[item]) === true) {
      }
      else {
        tf = false;
        console.log(tf);
        return tf; 
      }
    }
    else if (obj1[item] === obj2[item]) {
    }
    else {
        tf = false;
        console.log(tf)
        return tf; 
    }

  }
  
  tf = true; 
  console.log(tf)
  return tf;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;


  if (eqObjects(actual, expected) === true) {
      console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
      console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }



  // console.log(`Example label: ${inspect(actual)}`);


};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, c: "abc" }, { b: 2, a: '1', c: "abcd" });
assertObjectsEqual({ a: '1', b: 2, e: [1, 2, 3] }, { b: 2, a: '1', e: [1, 2, 3] });