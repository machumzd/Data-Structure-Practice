
function binary(arr, t) {
    console.log("num is" + t)
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    // arr.sort(function(a,b){return  b-a })
    console.log("the sorted array is:= " + arr)

     while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[middleIndex] === t) {
        console.log(middleIndex)
    }
        if (arr[middleIndex] > t) {
            rightIndex=(middleIndex-1)
        }else{
            leftIndex=(middleIndex+1)
        }
        
    }
return -1
}
let arr = []
const scanner = require("prompt-sync")();
const n = scanner("enter the array size");
console.log("enter the array elements")
for (let i = 0; i < n; i++) {
    arr[i] = scanner()
}
const target = scanner("enter the target to search")
binary(arr, target)