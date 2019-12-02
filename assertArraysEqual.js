const assertArraysEqual = function (arr1, arr2) {
  
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

module.exports = assertArraysEqual;