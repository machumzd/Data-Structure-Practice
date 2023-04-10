class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.top=null
        this.end=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.top=node
            this.end=node
            this.size++
        }else{
        node.next=this.top
        this.top=node
        this.size++
        }

    }
    pop(){
        if(this.isEmpty()){
            return null
        }else{
          this.top=this.top.next
            this.size--

        }
    }
    print(){
        if(this.isEmpty()){
            console.log("the list is null")
        }else{
            let curr=this.top
            let lists=""
            while(curr){
                lists+=`${curr.value} `
                curr=curr.next
            }  
           console.log(lists)
        }
   
    }

}
const list=new LinkedList()
list.push("h")
list.push("e")
list.push("l")
list.push("l")
list.pop()
list.print()