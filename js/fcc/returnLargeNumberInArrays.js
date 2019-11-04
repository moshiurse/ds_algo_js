function largestOfFour(arr) {
  // You can do this!
  var newArray = [];
  for(var i = 0; i< arr.length; i++){
    var value = arr[i][0];
      for(var j = 0; j< arr[i].length; j++){
        if(value < arr[i][j]){
          value = arr[i][j];
        }
    }
newArray.push(value);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
