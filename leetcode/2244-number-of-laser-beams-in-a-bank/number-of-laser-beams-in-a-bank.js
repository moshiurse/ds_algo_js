/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prev= 0;
    let total = 0;

    const calc = (s) => {
        return s.split('').reduce((count, c) => count + parseInt(c), 0);
    };

    for (const row of bank) {
        const curr = calc(row);
        if (curr === 0)
            continue;

        total += curr * prev;
        prev = curr;
    }
    return total;
};
