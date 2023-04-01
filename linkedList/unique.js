class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
        }else{
            this.tail.next=node
            this.tail=node
            this.size++
        }
    }
    unique(){
if(this.isEmpty()){
    return null
}else{ 
let curr=this.head
while(curr!=null){
    let prev=curr
    let curr2=curr.next
    while(curr2!=null){
        if(curr.value==curr2.value){
            prev.next=curr2.next
            this.size--
        }else{
            prev=curr2
        }
        curr2=curr2.next
    }
    curr=curr.next
}

}
    }
    
    print(){
        if(this.isEmpty()){
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
const list=new Linkedlist()
list.append(10)
list.append(10)
list.append(20)
list.append(10)
list.append(10)
list.append(30)
list.unique()
list.print()

