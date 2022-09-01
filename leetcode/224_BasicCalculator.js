// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// There will be no two consecutive operators in the input.
// Every number and running calculation will fit in a signed 32-bit integer.

var calculate = function(s) {
    let length = s.length;
    let stack = [];
    let result = 0;
    let operand = 1;
    let current = 0;

    for (let i = 0; i < length; i++) {
        if(s[i] != ' '){
            if(!isNaN(s[i])) {
                current = (current * 10) + parseInt(s[i]);
                // console.log(current);
            }else if(s[i] == '+' || s[i] == '-'){
                console.log(s[i]);
                result += current * operand;
                current = 0;
                if(s[i] == '+') operand = 1;
                if(s[i] == '-') operand = -1;
            }else if(s[i] == '(') {
                stack.push(result);
                stack.push(operand);
                result = 0;
                operand = 1;
            }else if(s[i] == ')') {
                result += current * operand;
                result *= stack.pop();
                result += stack.pop();
                current = 0;
            }
        }
    }
    // console.log(result , current , operand);
    return result += current * operand;
    
};

console.log(calculate(" 1 + 2 "));
// console.log(calculate("(1+(4+5+2)-3)+(6+8) + 1 + 1"));
// console.log(calculate("2147483647"));