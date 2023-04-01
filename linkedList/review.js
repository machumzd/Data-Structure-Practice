class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
        }else{
            node.next=this.head
            this.head=node
            this.size++
        }
    }
    delete(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
        }else{
            let curr=this.head
            while(curr.next.value!=value){
               curr=curr.next
            }
            curr.next=curr.next.next
            this.size--
        }
    }
    print(){
        if(this.isEmpty()){
            console.log( "list is empty")
        }
            let curr=this.head
            let lists=""
            while(curr){
                lists+=`${curr.value} `
                curr=curr.next
            }
console.log(lists)
        
    }
}
const list=new linkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.delete(20)
list.print()