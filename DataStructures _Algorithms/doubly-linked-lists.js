//Doubly Linked Lists

//Doubly Linked Lists
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      before: null,
      after:null
    }; 
    this.tail= this.head;
    this.length = 1;
  }

  append(value) { 
    const node ={
      value: value,
      before: null,
      after:null
    }
    node.before = this.tail;  
    this.tail.after = node;
    this.tail = node; // very important
    this.length++;

  }

  prepend(value){
    const node = {
      value : value,
      before: null,
      after:null
    }  
    node.after = this.head;
    this.head.before = node;
    this.head = node; //very important
    this.length++;

    this.printList();
  }

  printList(){
    const arr=[];
    let currentNode = this.head
    while(currentNode!==null){  
      arr.push(currentNode.value);
      currentNode = currentNode.after;
    }

    console.log(arr);
  }

  insert(index, value){
    const node = {
      value: value,
      before: null,
      after:null
    }  
    let leadNode = this.findLeadNode(index-1); 
     
    node.before = leadNode; //new node point lead
    node.after = leadNode.after; //new node point next lead 
    leadNode.after.before = node; //next node point lead
    leadNode.after = node; //very improtant. insert, the node pointed by before and after node
    this.length++;
  }

  findLeadNode(index){
    let count = 0;
        let currentNode = this.head;
        while(count!==(index)) { 
            currentNode = currentNode.after;
            count++;
        } 
    return currentNode;
  }

  remove(index){
    let leadNode = this.findLeadNode(index-1); //O(n)
    leadNode.after= leadNode.after.after; 
    leadNode.after.after.before = leadNode;
    this.length--;

  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.printList(); //[ 10 ]
myLinkedList.append(5); //[ 10, 5 ]
myLinkedList.printList(); 
myLinkedList.append(16); //[ 10, 5, 16 ]
myLinkedList.printList();
myLinkedList.prepend(1); //[ 1, 10, 5, 16 ]
myLinkedList.printList();
myLinkedList.insert(3,99);//[ 1, 10, 5, 99, 16 ]
myLinkedList.printList(); 
myLinkedList.remove(2);//[ 1, 10, 5, 99, 16 ]
myLinkedList.printList(); 
//console.log(myLinkedList); 

