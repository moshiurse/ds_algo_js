const numbers = [10, 12, 3, 14, 50, 26, 72, 28, 39, 40];

const length = numbers.length;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        if(numbers[j] > numbers[j+1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        }
    }
}

console.log(numbers);