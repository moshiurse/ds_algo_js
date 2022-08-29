// Convert a non-negative integer num to its English words representation.

 

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 

// Constraints:

// 0 <= num <= 231 - 1


const numberWords = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Forty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety', 100: 'Hundred', 1000: 'Thousand', 1000000: 'Million', 1000000000: 'Billion'};

const numberReverse = [1000000000, 1000000, 1000, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


var numberToWords = function(num) {
    if(num == 0) return "Zero";
    if(!num) return "";
    if(numberWords[num]) console.log(numberWords[num], num);
    if(numberWords[num]) return `${num >= 100 ? 'One ' : ''}${numberWords[num]}`;

    let devidend = 0;
    let divisor = 0;
    let val = '';

    for (let i = 0; i < numberReverse.length; i++) {
        if(num >= numberReverse[i]) {
            devidend = Math.floor(num / numberReverse[i]);
            divisor = num % numberReverse[i];
            val = numberWords[numberReverse[i]];
            console.log(numberReverse[i], devidend, divisor, i, num, val);
            break;
        }
    }
    // console.log(devidend, divisor);
    return `${numberToWords(num >= 100 ? devidend + ' ' : null)} ${val} ${divisor != 0 ? numberToWords(divisor) : '' }`.trim();
    
};

console.log(numberToWords(10000110));
