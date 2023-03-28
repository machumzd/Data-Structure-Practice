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
        this.tail=null
    }
    isEmpty()
    {
        return this.size===0
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++

    }
    removefrombeg(){
        if(this.isEmpty()){
            return null
        }else{
            let remove=this.head.value
            this.head=this.head.next
        }
        this.size--;
    }
    removefromend(){
        if(this.isEmpty()){
            return null;
        }  
            if(this.size===1){
                this.head=null
                this.tail=null
            }else{
            let prev=this.head
            while(prev.next!=this.tail){
                prev=prev.next
            }
           prev.next=null
           this.tail=prev
            this.size--
        }
    
    }
    reverse(){
        if(this.isEmpty()){
            return null
        }
        let curr=this.head
        let prev=null
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev

    }
    search(value){
        if(this.isEmpty()){
            return null
        }
        let curr=this.head
        let count=0
        while(curr){
            if(curr.value==value){
            return count
            }
            curr=curr.next
            count++
        }
    }
    
removefromsearch(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value==value){
            let remove=this.head.value
            this.head=this.head.next
            this.size--
    }
    let prev=this.head
    while(prev.next.value!=value){
        prev=prev.next
    }
    let remove=prev.next.value
    prev.next=remove.next
  
}
    print(){
        if(this.isEmpty()){
            console.log("values not found")
        }else{
            let curr=this.head
            let lists=''
            while(curr){
                lists+=`${curr.value} `
                curr=curr.next
            }
            console.log(lists)
        }
        
    }


}
const list=new Linkedlist()

list.prepend(10)
list.append(20)
list.append(30)
const hello=[1,2,3,4,5]
for(i=0;i<hello.length;i++){
    list.append(hello[i])
}
// list.removefrombeg()
// list.removefromend()
list.print()
list.removefromsearch(3)
console.log("the value is founded"+list.search(4))
list.reverse()
list.print()