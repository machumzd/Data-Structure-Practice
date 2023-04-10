class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if(this.items.length === 0) {
        return "Underflow";
      }
      return this.items.shift();
    }
    front() {
      if(this.items.length === 0) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    printQueue() {
      let str = "";
      for(let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
let newQueue=new Queue()  
newQueue.enqueue("hello")
newQueue.enqueue("mzee")
newQueue.enqueue("how")
newQueue.dequeue("how")

console.log(newQueue.printQueue())


// const array=[1,2,3,4,5]
// array.push(10)
// array.shift()
// console.log(array) 
