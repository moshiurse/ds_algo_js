function translatePigLatin(str) {
  var vowel = ['a','e','i','o','u'];
  var sub = undefined;
	var match = false;
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < vowel.length; j++){
      if(str[i].includes(vowel[j])){
      match = true;
      break;
      }
    }
    if(match){
      sub = i;
      break;
    }
  }

  if(sub == 0){
    return str + "way";
  }else if(sub == undefined){
    return str + "ay"
  }else {
    return str.substring(sub) + str.substring(0,sub) + "ay";
  }

}

translatePigLatin("california");
