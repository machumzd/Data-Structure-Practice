function BinarySearch(arr,target)
{
    let leftIndex=0
    let rightIndex=arr.length-1
    if(target<0 ){
        return null
    }

    if(target==0){
        return arr[0].value
    }else{
        while(leftIndex<=rightIndex){
            let middleIndex=Math.floor((leftIndex+rightIndex)/2)
            if(arr[middleIndex]===target){
                return middleIndex
            }
            if(arr[middleIndex]>target){
                rightIndex=middleIndex-1
            }else{
                leftIndex=middleIndex+1
            }
        }
        return -1
    }
    
}
let array=[1,2,3,4,5]
console.log("hello")
console.log(BinarySearch(array,3))