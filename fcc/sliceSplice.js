function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var slice = arr1.slice(0);
  var spliceArray = [];
  
  for(var i = slice.length-1; i >= 0; i--){
  	spliceArray = arr2.splice(n,0,slice[i]);
  }
  
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
