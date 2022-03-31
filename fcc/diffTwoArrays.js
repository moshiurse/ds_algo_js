function diffArray(arr1, arr2) {
  var newArr = [];

  function uniqueValue(first,second){
    for(var i = 0; i < first.length; i++){
      if(second.indexOf(first[i]) == -1){
        newArr.push(first[i]);
      }
    }
  }

  uniqueValue(arr1,arr2);
  uniqueValue(arr2,arr1);
    
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
