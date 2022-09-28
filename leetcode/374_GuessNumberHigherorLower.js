// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 231 - 1
// 1 <= pick <= n

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    let data = 0;

    while(left < right) {
        let mid = Math.floor((left + right)/2);
        let result = guess(mid);
        if(result == 0) {
            data = mid;
            break;
        }else if(result == 1){
            left = mid + 1;
        }else if(result == -1){
            right = mid - 1;
        }
    }
    
    return data ? data : left;

};