// let a=[1,7,5,6,8,9,3]
// let b=[]
// for(let i=0;i<a.length;i++){
//     console.log("---------------")
//     for(j=i+1;j<a.length;j++){
//         if(a[i]<a[j]){
//          let temp=a[i]
//          a[i]=a[j]
//          a[j]=temp  
//     }
    
// }
// }
// console.log(a[1])

function array(arr){
    let Largest=arr[0]
    let secondLargest=arr[0]
for(i=1;i<arr.length;i++){
    if(arr[i]>Largest){
        secondLargest=Largest;
        Largest=arr[i]
    }else if(arr[i]>secondLargest&&arr[i]<Largest){
        secondLargest=arr[i]
    }
}
return secondLargest

}
const arr=[1,3,5,4,5,6]
console.log(array(arr))