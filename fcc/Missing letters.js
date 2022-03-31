function fearNotLetter(str) {


	var character;
	var match = false;
  for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i+1)-str.charCodeAt(i) > 1){
		match = true;
    }
	if(match){
		character = String.fromCharCode(str.charCodeAt(i)+1);
    break;
  	}
  }
  return character;
}

fearNotLetter("abcdefghj");
