const without = function (source, itemsToRemove) {
  let filtered = source.filter(function(element) {
 
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (element === itemsToRemove[k]) {
        return false;
      }
    }
    return true;
  });

  return filtered; 
}

module.exports = without; 