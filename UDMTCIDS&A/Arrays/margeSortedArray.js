function margedSortedArrays(array1,array2){
  const newArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i= 1;
  let j = 1;

  if(array1.length === 0){
    return array2;
  }

  if(array2.length === 0){
    return array1;
  }

  while(array1Item || array2Item){
    if(!array2Item || array1Item < array2Item){
      newArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }else{
      newArray.push(array2Item);
      array2Item =  array2[j];
      j++;
    }
  }

  return newArray;
}

console.log(margedSortedArrays([3,5,7,10],[8,40,50]));
