let array=[1,2,3,4]
let pos=4;

for(let i=pos;i<array.length-1;i++){
    array[i]=array[i+1]
}
array.length=array.length-1;
console.log(array)
