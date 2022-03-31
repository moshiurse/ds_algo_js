function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArray = [].concat(...arr);
  return newArray.some(Array.isArray) ? 
  steamrollArray(newArray) : newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
