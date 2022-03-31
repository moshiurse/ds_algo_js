function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
    for(var i = 0; i < collection.length; i++){
      var match = true;
      for(var prop in source){
        if(source[prop] !== collection[i][prop]){
          match = false;
          break;
        }
      }
      if(match){
        arr.push(collection[i]);
      }
    }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
