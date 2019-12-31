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

module.exports = letterPositions;