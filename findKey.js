const findKey = function(obj, callBack) {
  let keys = Object.keys(obj);
  for (key of keys) {
    if (callBack(obj[key])) {
      // console.log(key);
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;