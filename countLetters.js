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

module.exports = countLetters;