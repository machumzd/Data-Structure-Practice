function binarySearch(arr,target){
    let start=0
    let end=arr.length-1
    if(start>end){
        return "not found"
    }
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]>target){
            start=mid+1
        }else{
            end=mid-1
        }
    }



}
const array=[5,4,2,8,6,7,6]
array.sort((a,b)=>b-a);
// const set=new Set(array)   for removing dup
// let arr=[...set]
// const arr=Array.from(set)
console.log(array)
console.log("the position 4 is:"+ binarySearch(array,4) )

// function binarySearch(arr,target){
//     let start=0
//     let end=arr.length-1
//     return toSearch(arr,target,start,end)
// }
// function toSearch(arr,target,start,end){
//     if(start>end){
//         return null
//     }
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]==target){
//         return mid
//     }else if(arr[mid]<target){
//         return toSearch(arr,target,start,mid-1)
//     }else{
//         return toSearch(arr,target,mid+1,end)
//     }
// }