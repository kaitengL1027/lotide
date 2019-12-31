const tail = require('../tail');

const assert = require('chai').assert;

describe('#tail', () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
  it("returns ['house', 'labs'] for ['light', 'house', 'labs']", () => {
    assert.deepEqual(tail(['light', 'house', 'labs']), ['house', 'labs']);
  });
});