// function bubble(arr){
//     for(i=0;i<arr.length;i++){
//         let swapped=false
//         for(j=1;j<arr.length-i;j++){
//             if(arr[j]<arr[j-1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j-1]
//                 arr[j-1]=temp
//                 swapped=true;
                
//             }
//         }
//         if(!swapped){
//             break
//         }   
//     }
//     return arr
// }
//const array=[1,2,3,4,5]  time complexity will be best case it means array is sorted(o(n))
const array=[8,5,3,2,6]   //time complexity will be in worst case (o(n^2))
console.log(bubble(array))


function bubble(arr){
    for(i=0;i<arr.length;i++){
        for(j=1;j<arr.length-i;j++){
            if(arr[j]<arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}