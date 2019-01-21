//1.build array 
class myArray {
  constructor(){
    this.length = 0;
    this.data ={};
  }
  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(item){
    delete this.data[this.length-1];
    this.length--;
    return this.length;
  }

  delete(index){ 
    const item = this.data[index];
    this.shiftItems(index); 
  
  }

  shiftItems(index){
    for(let i= index; i<this.length-1; i++){ 
      this.data[i] = this.data[i+1]; //O(n)
    }
    delete this.data[this.length-1];
    this.length--;
  }



}

const arr = new myArray();

console.log(arr);

arr.push('h1');
arr.push('hh2');
arr.push('hhh3');
arr.push('hhhhh4');

console.log(arr);

arr.pop();
console.log(arr);
 
 arr.delete(1);
 console.log(arr);
