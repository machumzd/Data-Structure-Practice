function num(n){
let i;
if(n<2){
    return false
}
// for(i=2;i<n;i++){ normal condition ll
for(i=2;i<Math.sqrt(n);i++){  //in this way we consume time complexity each time we scan square root of times
    if(n%i==0){
        return false
    }
}
return true
}
console.log(num(5));
console.log(num(1));
console.log(num(4));