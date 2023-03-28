function array(arr){
let search=2;
for(i=0;i<arr.length;i++){
    if(arr[i]==search){
      console.log("item found at pos :-"+(i+1))
    }
}
}
let arr=[1,2,8,4,5]
array(arr)
