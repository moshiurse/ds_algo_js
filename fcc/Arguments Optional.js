function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  
  var a = args[0];
  var b = args[1];

  function isNumber(number){
    return Number.isFinite(number);
  }

  if(isNumber(a)){
    if(isNumber(b)){
      return a+b;
    }else if(!b){
      return function(b){
        if(isNumber(b)){
          return a+b;
        }
      }
    }
  }
}

addTogether(2,3);
