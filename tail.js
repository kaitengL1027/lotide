// const assertEqual = require('./assertEqual');

const tail = function (arr) {
  let tailArr = [];
  if (arr.length <= 1) {
    return tailArr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      tailArr.push(arr[i]);
    }
  }
  return tailArr;
};

module.exports = tail;

