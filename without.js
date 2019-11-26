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

const without = function (source, itemsToRemove) {
  let filtered = source.filter(function(element) {
 
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (element === itemsToRemove[k]) {
        return false;
      }
    }
    return true;
  });

  return filtered; 
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3, 4, 5], [2, 3]), [1, 4, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 3, 4]), [1, 5]);
assertArraysEqual(without(["1", 2, 3, 4, 5], [1, 3]), ["1", 2, 4, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), []);