function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat = "";
  if(num <= 0){
    return repeat;
  }else{
    for(var i=0; i < num; i++){
      repeat+= str;
    }
    return repeat;
  }

}

repeatStringNumTimes("abc", 3);
