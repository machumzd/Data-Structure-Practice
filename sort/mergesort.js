// function merge(arr, start, end) {
//     if (start < end) {
//         let mid = Math.floor((start + end) / 2)
//         merge(arr, start, mid)
//         merge(arr, mid + 1, end)
//         mergeSort(arr, mid, start, end)
//     }
//     return arr
// }
// function mergeSort(arr, mid, start, end) {
//     i = start
//     j = mid + 1
//     k = start
//     let b = []
//     while (i <= mid && j <= end) {
//         if (arr[i] > arr[j]) {
//             b[k] = arr[j]
//             j++
//         } else {
//             b[k] = arr[i]
//             i++;
//         }
//         k++;
//     }
//     if (i > mid) {
//         while (j <= end) {
//             b[k] = arr[j]
//             k++
//             j++
//         }
//     } else {
//         while (i <= mid) {
//             b[k] = arr[i]
//             i++
//             k++
//         }
//     }
//     for (i = start; i <= end; i++) {
//         arr[i] = b[i]
//     }
//     return arr
// }

// let array = [1, 5, 6, 4,8, 7]
// console.log(merge(array, 0, array.length - 1));

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return mergeSortMain(mergeSort(left),mergeSort(right))
}
function mergeSortMain(left,right){
    let third=[]
    let i=0
    let j=0
    let k=0
    while(i<left.length && j<right.length){
        if(left[i]>right[j]){
            third[k]=right[j]
            j++
        }else{
            third[k]=left[i]
            i++
        }
        k++
    }
    while(i<left.length){
        third[k]=left[i]
        i++
        k++
    }
    while(j<right.length){
        third[k]=right[j]
        j++
        k++
    }
    return third
}


console.log(mergeSort([1,9,5,3,4,6,8]))