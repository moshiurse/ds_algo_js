function sumPrimes(num) {
  if(num < 2){
    return 1;
  }
  var result = 0;
  for(var i = 2; i <= num; i++){
    var count = 0;
    for(var j = 1; j <= i; j++){
      if(i%j == 0){
        count++;
      }
    }
    if(count <3){
      result += i;
    }
  }
  return result;
}

sumPrimes(10);
