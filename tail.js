const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(arr) {
  let tailArr = [];
  if (arr.length <= 1) {
    return tailArr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      tailArr.push(arr[i]);
    }
  }
  return tailArr;
}

console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([]));
console.log(tail([100]));
console.log(tail(["abc"]));
console.log(tail(["a", "b"]));

console.log("----------------");

const exArray = ["Hello", "Lighthouse", "Labs"];
const result = tail(exArray);
assertEqual(result.length, exArray.length - 1); // ensure we get back two elements
for (let j = 0; j < result.length; j++) {
  assertEqual(result[j], exArray[j + 1]);
}