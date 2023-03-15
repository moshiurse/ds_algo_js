
const pattern1 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += '*';
        }
        str += '\n';
    }
    return str;
}

const pattern2 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        str += '\n';
    }
    return str;
}

const pattern3 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        str += '\n';
    }
    return str;
}

const pattern4 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += i;
        }
        str += '\n';
    }
    return str;
}

const pattern5 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            str += '*';
        }
        str += '\n';
    }
    return str;
}


console.log(pattern5(6));