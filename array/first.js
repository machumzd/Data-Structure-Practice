const scanner=require("prompt-sync")();
var a=[];
console.log("enter 5 numbers")
for(let i=0;i<5;i++){
    a[i]=scanner()
}
console.log(a);
function hello(){
    function heii(){
        hello()
    }
}