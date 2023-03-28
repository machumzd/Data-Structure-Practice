//recursion factorial

// function factorial(n){  
//     if(n<=1){   
//         return 1
//     }
//      g= n*factorial(n-1)
//      return g;
// }
// const Hello=factorial(5);
// console.log(Hello)

//big o =o(n)
function factorial(n){
    if(n<=1){
        return 1
    }
    return n*factorial(n-1)
}
console.log("the fatorial is "+factorial(5))