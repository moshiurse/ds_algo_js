function towerOfHanoi(n, from, helper, to) {
    if(n == 0) return;

    towerOfHanoi(n-1, from, to, helper);

    console.log(from, '->', to);

    towerOfHanoi(n-1, helper, from, to);

}

towerOfHanoi(2, 'A', 'B', 'C');