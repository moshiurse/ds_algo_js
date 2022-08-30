function validateSubsequence(arr1, arr2) {
    let firstPointer = 0;
    let secondPointer = 0;

    while(firstPointer < arr1.length && secondPointer < arr2.length) {
        if(arr1[firstPointer] === arr2[secondPointer]) {
            secondPointer++;
        }
        firstPointer++;
    }

    return secondPointer === arr2.length;
}

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 11]));