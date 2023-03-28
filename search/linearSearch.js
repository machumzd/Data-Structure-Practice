function search(n){
    const arr=[-5,2,10,4,6]
    for(i=0;i<arr.length;i++){
        if(arr[i]==n){
            return console.log("find at pos"+i)
        }
    }
    return console.log("value not found")
}

search(2);
search(5);
search(10);