const assertEqual = require('../assertEqual');
const tail = require('../tail');

const exArray = ["Hello", "Lighthouse", "Labs"];

const result = tail(exArray);

assertEqual(result.length, exArray.length - 1); // ensure we get back two elements
for (let j = 0; j < result.length; j++) {
  assertEqual(result[j], exArray[j + 1]);
}