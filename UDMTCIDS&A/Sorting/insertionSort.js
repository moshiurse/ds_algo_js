
const numbers = [10, 12, 3, 14, 50, 26, 72, 28, 39, 40];

    const length = numbers.length;
      for (let i = 0; i < length; i++) {
          if (numbers[i] < numbers[0]) {
        //move number to the first position
        numbers.unshift(numbers.splice(i,1)[0]);
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the numbers is almost sorted.
        if (numbers[i] < numbers[i-1]) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            if (numbers[i] >= numbers[j-1] && numbers[i] < numbers[j]) {
              //move number to the right spot
              numbers.splice(j,0,numbers.splice(i,1)[0]);
            }
          }
        }
      }
      }
  
  
  console.log(numbers);