//https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  var one = 0;
  var two = 0;

  for(var i = 0; i < arr.length; i++){
    one += arr[i][i];
  }
  for(var j = 0; j < arr.length  ; j++){
    two += arr[j][arr.length-(j+1)];
  }

  return Math.abs(one-two);

}


diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]);
