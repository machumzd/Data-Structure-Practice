let arr=[8,2,3,4,5,6]
let arrl=arr.length-1
let arr2=[]

console.log(arrl)
for(let i=0;i<arrl/2;i++){
    let temp=arr[i]
    arr[i]=arr[arrl-i]
    arr[arrl-i]=temp

}
console.log(arr) //5


// let arr=[1,2,3]
// let arr2=arr.reverse()
// console.log(arr2)