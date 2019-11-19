function dropElements(arr, func) {
  // Drop them elements.
var newArray = [];
for(var i = 0; i < arr.length; i++){
  if(func(arr[i])){
    newArray = arr.slice(i);
	break;
  }
}  
return newArray;
}

dropElements([1, 2, 3], function(n) {return n > 1; });

