/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let zero = 0;
    let one = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (i % 2 === 0) {
            if (char === '0') {
                one++;
            } else {
                zero++;
            }
        } else {
            if (char === '1') {
                one++;
            } else {
                zero++;
            }
        }
    }

    return Math.min(zero, one);
};