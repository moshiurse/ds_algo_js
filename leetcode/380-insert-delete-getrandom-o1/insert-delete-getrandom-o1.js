var RandomizedSet = function () {
    this.data = [];
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if(this.data[val] == undefined) {
        this.data[val] = val;
        this.size++;
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if(this.data[val] != undefined){
        delete this.data[val];
        this.size--;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let keys = Object.keys(this.data);
    let random = Math.floor((Math.random() * this.size));
    return keys[random];
};