function quicksort(arr){
    if(arr.length<=1){
        return arr
    } 
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(i=0;i<arr.length-1;i++){
       console.log("pivot:-" +pivot)
        if(arr[i]>pivot)
        {
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}
const array=[1,2,8,5,6,3]
console.log(quicksort(array))