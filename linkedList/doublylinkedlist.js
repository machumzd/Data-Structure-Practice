class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class doubly{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    prepend(value){
        for(let i=0;i<value.length;i++){
        const node=new Node(value[i])
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
            this.prev=node
        }
        this.size++
    }
}
    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.prev=this.tail
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    print(){
         if(!this.head){
            console.log("not found")
         }else{
            let curr=this.head
            let lists=""
            while(curr){
            lists+=`${curr.value} `
            curr=curr.next
            }
console.log(lists)
         }
    }
}

const list=new doubly()
var arr = [10, 23, 32, 42, 45];
// for (let i = 0; i < arr.length; i++) {
//   list.append(arr[i]);
// }
list.prepend(arr)
list.print();