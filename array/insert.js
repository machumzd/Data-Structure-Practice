let arr=[5,6,7,8]
let elem=4;
let pos=2;
console.log("original array="+arr)
for(let i=arr.length;i>pos;i--){
    console.log(i+"th condition"+arr[i]+"---"+arr[i-1])
    arr[i]=arr[i-1]
}
arr[pos]=elem;
console.log(arr);