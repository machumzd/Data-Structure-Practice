class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
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
    searchWithIndex(value){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.head
                let count=0
            for(let i=0;i<=this.size-1;i++){
            if(count==value){
               return curr.value
            }
            curr=curr.next
            count++
        }
    }
    }
    search(value){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.head
            let count=0
            while(curr){
               if(curr.value==value){
                return count
               }
               count++
               curr=curr.next
            }

        }
    }
    print(){
        if(this.isEmpty()){
            console.log("the list is empty")
        }else{
            let curr=this.head
            let lists=""
            while(curr){
                lists=lists+`${curr.value} `
                curr=curr.next
            }
            console.log(lists)
        }
    }
}

const list=new linkedList()
list.append(10)
list.append(30)
list.append(20)
console.log("the value of that position is: "+list.searchWithIndex(2))
console.log("founded at position: "+list.search(30))
list.print()
