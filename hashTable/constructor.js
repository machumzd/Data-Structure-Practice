class hashTable{
    constructor(size=7){
        this.dataMap=new Array(size)
    }
    _hash(key){
        let hash=0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }
    set(key,value){
        let index=this._hash(key)
        if(!this.dataMap[index]){
            this.dataMap[index]=[]
        }
        // for(let i=0;i<this.dataMap[index].length;i++){
        //     if(this.dataMap[index][i][0]===key){
        //         this.dataMap[index][i][1]=value
        //         return this
        //     }
        // }
        this.dataMap[index].push([key,value])
        return this
    }
    get(key){
        let total =this._hash(key)
        // for(let i=0;i<key.length;i++){
        //     total=(total+key.charCodeAt(i)*23)%this.dataMap.length
        // }
        if(!this.dataMap[total]){
            console.log("the value is null")
        }else{
            for(let i=0;i<this.dataMap[total].length;i++){
                if(this.dataMap[total][i][0]==key){
                    console.log("the key is "+this.dataMap[total][i][0])
                    console.log("the value is "+this.dataMap[total][i][1])
                    console.log("the position is "+total)
                }
            }
        }
    }
    keys(){
        let secondArray=[]
        for(let i=0;i<this.dataMap.length;i++){
            if(this.dataMap[i]){
                for(let j=0;j<this.dataMap[i].length;j++){
                    secondArray.push(this.dataMap[i][j][0])
                }
            }
        }
        console.log(secondArray)
    }
    findDuplicates(arr){
        let duplicates=[]
        let hash={}
        for(i=0;i<arr.length;i++){
            if(!hash[arr[i]]){
                hash[arr[i]]=true
            }else{
                duplicates.push(arr[i])
            }
        }
        return arr
    }
}

const myHashTable=new hashTable()
myHashTable.set("hello",3)
myHashTable.set("hellp",2)
myHashTable.set("mzee",9)
myHashTable.get("mzee")
myHashTable.keys()

// for (let i = 0; i < myHashTable.dataMap.length; i++) {
//     if (myHashTable.dataMap[i]) {
//         console.log(`Index ${i}:`)
//         for (let j = 0; j < myHashTable.dataMap[i].length; j++) {
//             console.log(`  [${myHashTable.dataMap[i][j][0]}, ${myHashTable.dataMap[i][j][1]}]`)
//         }
//     }
// }
