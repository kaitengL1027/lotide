const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



function countLetters(str) {
  const counterObj = {};
  let string = str.split(""); 
  // console.log(string);
  for (let i of string) {
    if (i !== " ") {
      if (counterObj[i]) {
        counterObj[i] += 1;
      } else {
        counterObj[i] = 1;
      }
    }
  }
  // console.log(counterObj); OUTPUT TEST!!!!!
  return counterObj;
}

countLetters("hey how are you bro");
// countLetters("");
// countLetters(" ");

//  console.log(assertEqual(countLetters("hey how are you bro"), {h: 2, e: 2, y: 2, o: 3, w: 1, a: 1, r: 2, u: 1, b: 1}));
//  console.log(assertEqual(countLetters(""), {}));
//  console.log(assertEqual(countLetters(" "), {})); 