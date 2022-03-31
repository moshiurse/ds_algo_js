function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.forEach(function(value){
    value.orbitalPeriod = Math.round(2*Math.PI* 
    Math.sqrt(
      (Math.pow((earthRadius+value.avgAlt),3)/
      GM)));
      delete value.avgAlt;
  })
    
  return arr;
  }

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
