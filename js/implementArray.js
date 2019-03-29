class implementArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data[item];
    }

    pop(){
        let last = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return last;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItem(index);
        return item;
    }

    shiftItem(index){
        for (let i = index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];

        }
        delete this.data[this.length-1];
        this.length--;
    }

}

const myArray = new implementArray();
myArray.push('Hey');
myArray.push('Who');
myArray.push('!');
myArray.pop();
myArray.delete(0);
myArray.push('are');
myArray.push('You');
myArray.shiftItem(0);
console.log(myArray);