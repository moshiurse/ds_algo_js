function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++){
    if(Boolean(collection[i][pre]) == false){
      return false;
    }
    }
      return true;
}
