function String(value){
    value=value.split("")
    let result={}
    for(i=0;i<value.length;i++){
        let n=value[i]
        result[n]=(result[n]??+0)+1
    }
    return result
}
console.log(String("mazood"))




function intege(arr) {
    let freq=[]
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
            console.log(arr[i], arr[j])
                count++
            }else{
                freq[i]=arr[i]
            }
        }
    }
    return freq
   
  }
  const array=[1,2,6,61,1,2,3,4]
console.log(intege(array)) //126,61,3