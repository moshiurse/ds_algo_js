/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    let [nl, nr] = newInterval;
    let done = false;

    for(let i = 0; i < intervals.length; i++){
        if(intervals[i][1] < nl){
            result.push(intervals[i]);
        }else if(intervals[i][0] > nr){
            if(!done) result.push([nl, nr]);
            done = true;
            result.push(intervals[i])
        }else{
            nl = Math.min(intervals[i][0], nl);
            nr = Math.max(nr, intervals[i][1])
        }
    }

    if (!done) result.push([nl, nr]);
    return result;
};
