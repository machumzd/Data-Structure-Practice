class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
      this.tail = null;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
  
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
  
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }
  
    deleteAll(value) {
      if (this.isEmpty()) {
        return null;
      }
  
      let curr = this.head;
      let prev = null;
      while (curr) {
        if (curr.value === value) {
          if (prev === null) {
            this.head = curr.next;
          } else {
            prev.next = curr.next;
          }
          if (curr === this.tail) {
            this.tail = prev;
          }
          this.size--;
        } else {
          prev = curr;
        }
        curr = curr.next;
      }
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("the list is empty");
      } else {
        let curr = this.head;
        let lists = "";
        while (curr) {
          lists += `${curr.value},`;
          curr = curr.next;
        }
        console.log(lists);
      }
    }
  }
  
  const list = new LinkedList();
  list.prepend(10);
  let array = [10, 15, 15, 15, 30, 15, 40, 15, 50];
  for (i = 0; i < array.length; i++) {
    list.append(array[i]);
  }
  list.print();
  list.deleteAll(15);
  console.log(list.getSize());
  list.print();
  