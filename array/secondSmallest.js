function second(arr) {
    let min = arr[0]
    let secondMin = arr[0]

    for (i = 1; i < arr.length; i++) {
            if (arr[i] < min) 
            {
                secondMin = min 
                min = arr[i]
                } else if (arr[i] < secondMin) {
                secondMin = arr[i]  
             }
        }
   
    return min

}
const arr = [5, 6, 5, 2, 5, 6, 2]
console.log(second(arr))