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

  for (let i in arr1) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }

  return true;

  // if (arr1.length !== arr2.length) {
  //   return false;
  // }

  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //   }
  // }
  // return true;
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, [3, 4, 5]], [1, 2, [3, 4, 5]]), true);
assertEqual(eqArrays([1, [2, [3]], 4], [1, [2, [3]], 4]), true);
assertEqual(eqArrays([1, [2, [3]], 4], [1, [2, [3, 4]], 4]), false);
assertEqual(eqArrays([[[][[]]]], [[[][[]]]]), true);