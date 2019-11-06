function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for(var i = 0; i< arr.length; i++){
    if(!!arr[i] == false){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);
