class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0;
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            console.log("it is emoty")
        } else {
            let curr = this.head
            let lists = ""
            while (curr) {
                lists += `${curr.value} `
                curr = curr.next
            }
            console.log(lists)
        }
    }
}

const List = new Linkedlist()
var arr = [10,23,32,42,45]
for (let i=0; i<arr.length; i++){
   List.append(arr[i]);
}
List.print()
