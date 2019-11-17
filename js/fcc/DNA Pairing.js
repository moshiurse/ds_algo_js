function pairElement(str) {
  str = str.split('');
  var newArray = [];
  for(var i = 0; i < str.length; i++){
    switch(str[i]){
      case 'A':
        newArray.push(['A','T']);
        break;
      case 'T':
        newArray.push(['T','A']);
        break;
      case 'C':
        newArray.push(['C','G']);
        break;
      case 'G':
        newArray.push(['G','C']);
        break;
    }
  }
  return newArray;
pairElement("ATTC");

