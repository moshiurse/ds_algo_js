
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

const pattern6 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            str += j;
        }
        str += '\n';
    }
    return str;
}

const pattern7 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1; j++) {
            str += ' ';
        }
        for (let j = 0; j < 2*i+1; j++) {
            str += '*';
        }
        for (let j = 0; j < n-i-1; j++) {
            str += ' ';
        }
        str += '\n';
    }
    return str;
}

const pattern8 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += ' ';
        }
        for (let j = 0; j < (n-i-1)*2 + 1; j++) {
            str += '*';
        }
        for (let j = 0; j < i; j++) {
            str += ' ';
        }
        str += '\n';
    }
    return str;
}

const pattern9 = (n) => {
    let str = '';
    str += pattern7(n);
    str += pattern8(n);
    return str;
}

const pattern10 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        str += '\n';
    }
    for (let i = n-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        str += '\n';
    }
    return str;
}

const pattern11 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let s = '';
            if(i % 2 == 0 && j % 2 == 0) s = 1;
            if(i % 2 == 1 && j % 2 == 0) s = 0;
            if(i % 2 == 1 && j % 2 == 1) s = 1;
            if(i % 2 == 0 && j % 2 == 1) s = 0;

            str += s;
        }
        str += '\n';
    }
    return str;
}

const pattern12 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        for (let j = 0; j < (n-i) * 2; j++) {
            str += ' ';
        }
        for (let j = i; j > 0; j--) {
            str += j;
        }
        str += '\n';
    }
    return str;
}

const pattern13 = (n) => {
    let str = '';
    let count = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            count++;
            str += count + ' ';
        }
        str += '\n';
    }
    return str;
}

const pattern14 = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        let charCode = 65;
        for (let j = 1; j <= i; j++) {
            str += String.fromCharCode(charCode) + ' ';
            charCode++;
        }
        str += '\n';
    }
    return str;
}

const pattern15 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        let charCode = 65;
        for (let j = 1; j <= n-i; j++) {
            str += String.fromCharCode(charCode) + ' ';
            charCode++;
        }
        str += '\n';
    }
    return str;
}




console.log(pattern15(6));