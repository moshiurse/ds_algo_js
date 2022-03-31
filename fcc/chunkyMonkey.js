function chunkArrayInGroups(arr, size) {

	var length = Math.ceil(arr.length/size);
  var newArray = [];
  var count = 0;
  for(var i = 0; i< length; i++){
    newArray[i] = arr.slice(count,count+size);
    count += size;
  }

  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d","e"], 2);
