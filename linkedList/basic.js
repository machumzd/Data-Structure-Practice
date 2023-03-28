class Node{
    constructor(value){
    this.value=value
    this.next=null
}
}
class Linkedlist{
constructor(){
    this.head=null
    this.size=0
}
isEmpty(){
    return this.size===0
}    
getSize(){
    return this.size
}
//o(1)
prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node;
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
}
//o(n)
append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        let prev=this.head
        while(prev.next){ 
            prev=prev.next
        }
        prev.next=node
    }
    this.size++
}

insert(value,index)
{
    if(index < 0 || index>this.size){
        return 
    }
    if(index===0){
       this.prepend(value) 
    }else{
        let prev=this.head
        const node=new Node(value)
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
    const node=new Node(value)
    
}

delete(index){
    if(index<0 || index>=this.size){
        return null
    }
    let removeNode
    if(index==0){
        removeNode=this.head
        this.head=this.head.next
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removeNode=prev.next
        prev.next=removeNode.next
    }
    this.size--
    return removeNode.value

    
}
//o(1) for removing first 0(n)for last and center or random
removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value==value){
        this.head=this.head.next
        this.size--
    }else{
     let prev=this.head
     while(prev.next && prev.next.value!=value){
        prev=prev.next
     }
     let removeNode=prev.next
     prev.next=removeNode.next
     
    }
    this.size--;
}

search(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value==value){
        return "its head"
    }
    let count=0
    let curr=this.head
    while(curr){
        if(curr.value===value){
            return count
        }
        count++
        curr=curr.next
    }
     
    return "value not found"
}
//o(n) time
reverse(){
    let prev=null
    let curr=this.head
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
}
print(){
    if(this.isEmpty()){
        console.log("list is empty")
    }else{
    let curr=this.head
    let lists=''
    while(curr){
        lists +=`${curr.value} `
        curr=curr.next
    }
    console.log(lists)
}
}


}
const List=new Linkedlist()
console.log("is empty",List.isEmpty())
console.log("th size is",List.getSize())
List.print()

List.append(10)
List.print()

List.insert(22,0)
List.insert(25,2)
List.append(20)
List.append(30)
List.print()

// console.log(List.delete(10))
// List.removeValue(10)
console.log(List.delete(0))
List.print()
console.log("position is "+List.search(20))
// console.log("position is "+List.search(30))
List.reverse()
List.print()