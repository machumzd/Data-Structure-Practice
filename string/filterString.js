let array="hi mazood"
let arr=array.split("")

for(i=0;i<array.length/2;i++){
    let temp=arr[i]
    arr[i]=arr[(arr.length-i)-1]
    arr[(arr.length-i)-1]=temp
}
console.log(arr.join(""))