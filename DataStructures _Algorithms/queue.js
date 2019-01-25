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

class Queue {

  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.first;
  }

  push(value){
    const newNode = new Node(value);

    if(this.length ===0){
      this.last = newNode;
      this.first = newNode;
    } else{
      //const holdNode = this.last;  
      this.last.next = newNode;
      this.last = newNode;
      //this.last = newNode;
    }
    this.length ++;
    return this;
  }

  pop(){ 
    if(!this.first){
      return null;
    } 

    if( this.first === this.last){
      this.last = null;
    } 

    const holdNode = this.first; 
    this.first = holdNode.next; 
    this.length --; 

    return this;
  }
  
  
}

const myQueue = new Queue();
myQueue.push(1);
myQueue.push(10);
myQueue.push(100);
console.log(myQueue);

myQueue.pop();
console.log(myQueue);
myQueue.pop();
console.log(myQueue);
myQueue.pop();
console.log(myQueue);

/*
//We can use Array to build Stack

class Stack {

  constructor(){
    this.array =[];
  }
  pop(){
    this.array.pop();
  }
  push(value){
    this.array.push(value);
  }
  peek(){
    return this.array[length-1;
  }
}
*/

//Queue   FIFO
//Array
//Linked List