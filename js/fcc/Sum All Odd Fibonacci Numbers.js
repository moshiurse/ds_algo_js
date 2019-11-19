function sumFibs(num) {
  var previous=0;
  var current = 1;
  var result = 0;
  
  while(current <= num){
    if(current % 2 !== 0){
      result += current;
    }

    current += previous;
    previous = current - previous;

  }

    return result;
  
}

sumFibs(4);
