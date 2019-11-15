function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1);//slice an array
  return arr.filter(function(value){
    return !args.includes(value);
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
