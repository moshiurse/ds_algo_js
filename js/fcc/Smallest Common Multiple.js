function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var result = max;

  for(var i = max; i >= min; i--){
    if(result % i !== 0){
      result += max; 
      i = max;
    } 
  }

  return result;  
}

smallestCommons([1,5]);
