function findKeyByValue(obj, value) {
  let objValue = Object.values(obj); 
  for (let i in objValue) {
    if (value === objValue[i]) {
      return Object.keys(obj)[i];
    }
  }

  return undefined; 
}

module.exports = findKeyByValue;