const numbers = [10, 12, 3, 14, 50, 26, 72, 28, 39, 40];

const length = numbers.length;

for (let i = 0; i < length; i++) {
    let min = i;
    let temp = numbers[i]
    for (let j = i+1; j < length; j++) {
        if(numbers[j] < numbers[min]) {
            min = j;
        }
    }
    numbers[i] = numbers[min];
    numbers[min] = temp;
}

console.log(numbers);