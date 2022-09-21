// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

var multiply = function(num1, num2) {
    if(num1.length == 1 && num2.length == 1) return (num1[0] * num2[0]).toString();
    
    let num2Index = num2.length-1;
    let strArr = [];
    while(num2Index >= 0) {
        let num2Val = parseInt(num2[num2Index]);
        let reminder = 0; 
        let tempStr = "";
        for (let i = num1.length-1; i >= 0 ; i--) {
            let num1Val = parseInt(num1[i]);
            let multiply = (num2Val * num1Val) + reminder;
            if(multiply >= 10 && i != 0) {
                console.log('sss');
                reminder = Math.floor(multiply / 10);
                multiply = multiply % 10;
            }else{
                reminder = 0
            }
            console.log(multiply, reminder);
            tempStr = (+multiply + tempStr);
        }
        strArr.push(tempStr);
        num2Index--;
    }

    console.log(strArr);

    let total = "";
    // if(strArr.length <= 1) return strArr[0];
    total = sumTwo("", strArr[0])
    for (let i = 1; i < strArr.length; i++) {
        let zero = "".padEnd(i, 0);
        strArr[i] = strArr[i] + zero;
        total = sumTwo(total, strArr[i]);
    }

    let count = 0;
    for (let i = 0; i < total.length; i++) {
        if(total[i] == "0") count++;
    }
    total = count == total.length ? "0" : total;

    return total;
};

function sumTwo(one, two) {
    console.log(one, two);
    let length1 = one.length;
    let length2 = two.length;

    let current = 1;
    let reminder = 0;
    let tempStr = "";
    while ((length1 - current) >= 0 || (length2 - current) >= 0) {
        let oneVal = parseInt(one[length1 - current] ?? 0);
        let twoVal = parseInt(two[length2 - current] ?? 0);
        let sum = oneVal + twoVal + reminder;
        if(sum >= 10) {
            reminder = Math.floor(sum / 10);
            sum = sum % 10;
        }else{
            reminder = 0
        }
        tempStr = +sum + tempStr
        current++;
    }
    if(reminder > 0) tempStr = +reminder +tempStr;
    return tempStr;
}

// console.log(multiply("123", "456"));
console.log(multiply("9133", "0"));
// console.log(sumTwo("2493706660144", "124545120000"));
// console.log(sumTwo("2493706660144", "124545120000"));