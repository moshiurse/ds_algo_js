
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

const pattern16 = (n) => {
    let str = '';
    let charCode = 65;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += String.fromCharCode(charCode) + ' ';
        }
        str += '\n';
        charCode++;
    }
    return str;
}

const pattern17 = (n) => {
    let str = '';
    let charCode = 65;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1; j++) {
            str += ' ';
        }
        let minCode = 65;
        for (let j = minCode; j <= charCode; j++) {
            str += String.fromCharCode(j);
        }
        for (let j = charCode-1; j >= minCode; j--){
            str += String.fromCharCode(j);
        }
        for (let j = 0; j < n-i-1; j++) {
            str += ' ';
        }
        str += '\n';
        charCode++;
    }
    return str;
}

const pattern18 = (n) => {
    let str = '';
    let charCode = 64+n;
    for (let i = 0; i < n; i++) {
        for (let j = charCode-i; j <= charCode; j++) {
            str += String.fromCharCode(j);
        }
        str += '\n';
    }
    return str;
}

const pattern19 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            str += '*'
        }
        for (let j = 0; j < i*2; j++) {
            str += ' '
        }
        for (let j = 0; j < n-i; j++) {
            str += '*'
        }
        
        str += '\n';
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            str += '*'
        }
        for (let j = 0; j < (n-i-1)*2; j++) {
            str += ' '
        }
        for (let j = 0; j <= i; j++) {
            str += '*'
        }
        
        str += '\n';
    }
    return str;
}

const pattern20 = (n) => {
    let str = '';
        for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            str += '*'
        }
        for (let j = 0; j < (n-i-1)*2; j++) {
            str += ' '
        }
        for (let j = 0; j <= i; j++) {
            str += '*'
        }
        
        str += '\n';
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            str += '*'
        }
        for (let j = 0; j < i*2; j++) {
            str += ' '
        }
        for (let j = 0; j < n-i; j++) {
            str += '*'
        }
        
        str += '\n';
    }

    return str;
}

const pattern21 = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(i == 0 || j == 0 || i == n-1 || j == n-1){
                str += '*';
            }else{
                str += ' ';
            }
        }
    
        str += '\n';
    }

    return str;
}

const pattern22 = (n) => {
    let len = (n*2) - 1;
    let str = '';
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let top = i;
            let bottom = j;
            let left = len-1 - i;
            let right = len-1 - j; 
            str += (n - Math.min(Math.min(top, bottom), Math.min(left, right)));
        }
    
        str += '\n';
    }

    return str;
}





console.log(pattern22(3));