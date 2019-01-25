//statck  LIFO
//Array 
//Linked List 
//https://visualgo.net/en/list

//NODE
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.top = null;
    this.bottom =null;
    this.length = 0;
  }

  pop(){ 
    if(!this.top){
      return null;
    } 

    if( this.top === this.bottom){
      this.bottom = null;
    }
    
    const holdNode = this.top; 
    this.top = holdNode.next; 
    this.length --;

    //check the bottom
    /*
    if(!this.top){
      this.bottom = null;
    }
    */
    
    return this;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length ===0){
      this.top = newNode;
      this.bottom = newNode;
    } else{
      const holdNode = this.top; 
      this.top = newNode;
      this.top.next = holdNode;
    }
    this.length ++;
    return this;
  }
  peek(){
    return this.top;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(10);
myStack.push(100);
console.log(myStack);

myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);


//Queue   FIFO
//Array
//Linked List