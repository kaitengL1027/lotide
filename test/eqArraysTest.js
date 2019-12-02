const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, [3, 4, 5]], [1, 2, [3, 4, 5]]), true);
assertEqual(eqArrays([1, [2, [3]], 4], [1, [2, [3]], 4]), true);
assertEqual(eqArrays([1, [2, [3]], 4], [1, [2, [3, 4]], 4]), false);
assertEqual(eqArrays([[[][[]]]], [[[][[]]]]), true);