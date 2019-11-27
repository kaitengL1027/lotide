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


const letterPositions = function(sentence) {
  const results = {};
  // let valueArr = [];
  let stringArr = sentence.split("");

  for (let i in stringArr) {
    if (stringArr[i] !== " ") {
      if (results[stringArr[i]] !== undefined) {
        results[stringArr[i]].push(i);
      } else {
        results[stringArr[i]] = [];
        results[stringArr[i]].push(i);
      }
    }
  }
  
  // console.log(results); OUTPUT TEST!!!!
  return results;
}

letterPositions("Hello my bro");