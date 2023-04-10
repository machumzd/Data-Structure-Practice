// function selection(arr){
//,     for(let i=0;i<arr.length;i++){
//       let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//         }
//     }
//         if(i!==min){
//             let temp=arr[i]
//             arr[i]=arr[min]
//             arr[min]=temp
//         }   
//     }
//     return arr
// }

// console.log(selection([4,2,3,5,4,8,9,2,6]))

function selection(arr){
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    console.log(arr)
}
selection([1,5,4,8,9,7])