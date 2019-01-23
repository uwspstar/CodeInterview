//node : (value, point to next node)
//head : (value, point to next node) 
//tail : (value, point to NULL)
//exp :
// const arr =["red","blue","yellow"]
// Linked red-->blue-->yellow
// red
// 9098--> blue
//         2022 -->yellow
//                 45676-->null

/*
https://visualgo.net/en/list

Linked List is a data structure consisting of a group of vertices (nodes) which together represent a sequence. 
Under the simplest form, each vertex is composed of a data and a reference (link) to the next vertex in the sequence. 
Try clicking Search(77) for a sample animation on searching a value in a (Singly) Linked List.

Linked List and its variations are used as underlying data structure to implement List, Stack, Queue, and Deque ADTs (read this Wikipedia article about ADT if you are not familiar with that term).

In this visualization, we discuss (Singly) Linked List (LL) — with a single next pointer — and its two variants: Stack and Queue, and also Doubly Linked List (DLL) — with both next and previous pointers — and its variant: Deque.

*/


// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) { 
    const node ={
      value: value,
       next: null
    } 
    this.tail.next = node; //tail.next point to end, it is the new node
    this.tail = node; // the new node is the tail now, the head did not change
    this.length++;

  }
  prepend(value){
    const node = {
      value : value,
      next : null
    } 
    node.next = this.head; //node.next point to head, 
    this.head = node; // head reasign to node value, the tail did not change
    this.length++;
  }
  printList(){
    const arr=[];
    let currentNode = this.head
    while(currentNode!==null){ 
      // not currentNode.next !==null 
      // it will miss the last node 
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }

  insert(index, value){
    const node = {
      value: value,
      next :null
    } 

    let leadNode = this.findLeadNode(index-1); 
     
    node.next = leadNode.next;
    leadNode.next = node; 
  }

  findLeadNode(index){
    let count = 0;
        let currentNode = this.head;
        while(count!==(index)) { 
            currentNode = currentNode.next;
            count++;
        } 
    return currentNode;
  }

  remove(index){
    let leadNode = this.findLeadNode(index-1);
    let nextNotd = this.findLeadNode(index+1);

    console.log(leadNode);
    console.log(nextNotd); 

    leadNode.next= nextNotd; 

  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1); 
myLinkedList.insert(3,99);
myLinkedList.printList(); //[ 1, 10, 5, 99, 16 ]
myLinkedList.remove(2); //{ value: 10,  next: { value: 5, next: { value: 99, next: [Object] } } }
myLinkedList.printList(); //[ 1, 10, 5, 99, 16 ]
//console.log(myLinkedList); 

