function mutation(arr) {
	var check = true;
	for(var i = 0; i < arr[1].length; i++){
		if(!(arr[0].toLowerCase().includes(arr[1][i].toLowerCase()))){
			check = false;
        }
	}
  return check;
}

mutation(["hello", "heo"]);

