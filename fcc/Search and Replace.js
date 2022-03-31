function myReplace(str, before, after) {
  var beforeUpper = str.indexOf(before); 
  var final = "";
  if(str[beforeUpper] === str[beforeUpper].toUpperCase()){
      after = after.charAt(0).toUpperCase() + after.slice(1); 
  }
  return str.replace(before,after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

