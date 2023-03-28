function array(arr){
    let freaq={}
for(i=0;i<arr.length;i++){
    let n=arr[i]
   freaq[n]=(freaq[n] ?? 0)+1
}
return freaq
}
const arr=[10,20,10,10,4,5]
console.log(array(arr))