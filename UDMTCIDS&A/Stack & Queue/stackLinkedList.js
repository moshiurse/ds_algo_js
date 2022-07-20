class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            let pointer = this.top;
            this.top = newNode;
            this.top.next = pointer;
        }
        this.length++;
    }
    pop(){
        if(this.top) return null;

        const pointer = this.top;
        this.top = this.top.next;
        this.length--;

        if(!this.length) this.bottom = null;
        return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  
  
  
  
  //Discord
  //Udemy
  //google
  