function titleCase(str) {
  var split = str.toLowerCase().split(' ');

  for(var i = 0; i < split.length; i++){
    split[i] = split[i].charAt(0).toUpperCase() + 
    split[i].substring(1);
  }
  return split.join(' ');
}

titleCase("I'm a little tea pot");
