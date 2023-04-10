
    //index count povunna pole left j values ne compare cheythondd povum
   
//   function insertion(arr){
//     for(i=1;i<arr.length;i++){
//         let temp=arr[i] 
//         let j=i-1  //i=1
//       while(j>=0 && arr[j]>temp){
//       arr[j+1]=arr[j]
//       j--;
//       }
//     arr[j+1]=temp
//     }
//     return arr
// }


// function insertion(arr){
//     for(i=1;i<arr.length;i++){
//         let temp=arr[i]
//         for(j=i-1;j>=0;j--){
//             if(arr[j]>temp){
//                 arr[j+1]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(insertion([5,6,1,2,3,9]))


// //test  purpose
function insertion(arr){
    for(i=1;i<arr.length;i++){
        let temp=arr[i]
        for(let j=i-1;j>=0;j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }

    }
    console.log(arr)
}
insertion([5,6,1,2,3,9])