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

  append(arr) {
    for (let i = 0; i < arr.length; i++) {
      const node = new Node(arr[i]);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    }

  }

  deleteAll(value) {
    if (this.isEmpty()) {
      return null;
    }
    for (let i = 0; i < this.size; i++) {
      if (this.head.value == value && this.head!=null) {
        this.head = this.head.next
        this.size--
      }
    }
    let curr = this.head

    while (curr.next!=null) {
        if (curr.next.value == value) {
          curr.next = curr.next.next
          this.size--
        }else{
          curr = curr.next
        }
    }
    this.tail=curr
  }

  //   let curr = this.head;
  //   let prev = null;
  //   while (curr) {
  //     if (curr.value === value) {
  //       if (prev === null) {
  //         this.head = curr.next;
  //       } else {
  //         prev.next = curr.next;
  //       }
  //       if (curr === this.tail) {
  //         this.tail = prev;
  //       }
  //       this.size--;
  //     } else {
  //       prev = curr;
  //     }
  //     curr = curr.next;
  //   }
  // }

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
      console.log("the head is " + this.head.value)
      console.log("the tail is " + this.tail.value)

    }
  }
}

const list = new LinkedList();
let array = [10,10, 20,10,300,10,40,50];
list.append(array);
list.print();
console.log("\n------------------------")
list.deleteAll(10)
console.log("\n------------------------")
list.print();
console.log("the size is "+list.getSize());
