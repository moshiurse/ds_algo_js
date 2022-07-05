class HashMap {

    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const current = this.data[address];
        if (current) {
            for (let i = 0; i < current.length; i++) {
                if (current[i][0] === key) {
                    return current[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        console.log(this.data.length);
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }


}