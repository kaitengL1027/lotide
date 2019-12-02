const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, "java", 4, 5]), ["java"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);