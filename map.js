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

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ['go', 'raptors', 'go', '123'];
const words3 = [0, 1, 32, 12234234, '123423asdfasdf12342134'];
const words4 = ['', '1'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
const results4 = map(words4, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['g', 'r', 'g', '1']);
assertArraysEqual(results3, [undefined, undefined, undefined, undefined, '1']);
assertArraysEqual(results4, ['', '1']);