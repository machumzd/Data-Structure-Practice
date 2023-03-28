function recursive(arr,t){
return search(arr,t,0,arr.length-1)
}
function search(arr,t,leftIndex,rightIndex){
    let middleIndex= Math.floor((leftIndex+rightIndex)/2)
    if(leftIndex >rightIndex){
        return -1
    }
    if(t==arr[middleIndex]){
        return middleIndex
    }
    if(arr[middleIndex]>t){
        return search(arr,t,middleIndex+1,rightIndex)
    }else{
        return search(arr,t,leftIndex,middleIndex-1)
    }
    return -1
}


console.log(recursive([-5,2,4,6,10],4))
console.log(recursive([-5,2,4,10],2))


//big 0 =0(log n)