function recursive(arr,target){
    return search(arr,target,0,arr.length-1)
    }
    
    function search(arr,target,leftIndex,rightIndex){
    let middleIndex=Math.floor((leftIndex+rightIndex)/2)
    if(arr[middleIndex]==target&&target!=0){
    return middleIndex
    }
    if(arr[middleIndex]>target){
    return search(arr,target,leftIndex,middleIndex-1)
    }else{
    return search(arr,target,middleIndex+1,rightIndex)
    }
    return -1
    }
    
    const arr=[1,2,3,4,5,6]
    console.log(recursive(arr,3))