class MyArray{
  constructor(){
    this.data = {};
    this.length = 0;
  }

  get(index){
    return this.data[index];
  }

  push(value){
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index){
    for(var i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }

}

const newArr = new MyArray();
newArr.push("Moshiur");
newArr.push("Ela");
newArr.push("<3");
newArr.pop();
newArr.push("Hello");
newArr.push("Hi");
newArr.delete(2);
console.log(newArr);
